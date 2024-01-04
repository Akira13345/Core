const client = require('../../../index');
const {ChannelType, PermissionsBitField} = require('discord.js');

client.on('voiceStateUpdate', async (oldState, newState) => {

    if (newState.channelId === process.env.TEMPORARY_VOICE_CHANNEL) {

        if (newState.member.voice.channel) {
            return;
        }

        const channel = await newState.guild.channels.create({
            name: `🎤・${newState.member.user.username}`,
            type: ChannelType.GuildVoice,
            parent: process.env.TEMPORARY_VOICE_CATEGORY,
            permissionOverwrites: [
                {
                    id: newState.member.id,
                    allow: [PermissionsBitField.Flags.ManageChannels],
                },
            ]
        })

        await newState.setChannel(channel);

        const interval = setInterval(async () => {
            if (channel.members.size === 0) {
                await channel.delete();
                clearInterval(interval);
            }
        }, 60000); // 1 minute
    }
});