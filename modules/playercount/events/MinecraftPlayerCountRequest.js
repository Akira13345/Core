const client = require('../../../index');
const axios = require('axios');

const CONNECTED_USERS_CHANNEL_ID = process.env.CONNECTED_USERS_CHANNEL_ID;
const MEMBERS_CHANNEL_ID = process.env.MEMBERS_CHANNEL_ID;
const IP = process.env.IP;

client.on("ready", () => {
    async function updateStatus() {
        try {
            const response = await axios.get(`https://api.mcsrvstat.us/2/${IP}`);
            const json = response.data;

            client.channels.cache.get(CONNECTED_USERS_CHANNEL_ID).setName(`🚀 Connectés: ${json.players.online}`);

            const guild = client.guilds.cache.first();
            client.channels.cache.get(MEMBERS_CHANNEL_ID).setName(`🌏 Membres: ${guild.memberCount}`);
        } catch (error) {
            console.error("Une erreur s'est produite:", error);
        }
    }

    setInterval(updateStatus, 60000); // 1 minute
});