const client = require('../../../index');
const {EmbedBuilder} = require('discord.js');

client.on('guildMemberUpdate', async (oldMember, newMember) => {

    const boostRoleID = process.env.BOOST_ROLE_ID;
    const channelID = process.env.BOOST_CHANNEL_ID;

    const channel = newMember.guild.channels.cache.get(channelID);

    const boostRole = newMember.guild.roles.cache.get(boostRoleID);

    if (!boostRole) {
        console.log(`Le rôle ${boostRoleID} n'existe pas !`);
        return;
    }

    const hasBoostedBefore = oldMember.roles.cache.has(boostRoleID);
    const hasBoostedNow = newMember.roles.cache.has(boostRoleID);

    if (hasBoostedNow && !hasBoostedBefore) {

        const embed = new EmbedBuilder()
            .setTitle('🚀 Propulseur')
            .setDescription(`**${newMember.user}** a boosté le serveur ! Merci à lui !`)
            .setColor('#B526D8')
            .setThumbnail(newMember.user.displayAvatarURL())
            .setTimestamp()

        await channel.send({embeds: [embed]});

    }
});