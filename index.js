const {Client, GatewayIntentBits, Collection, Partials} = require("discord.js");

const {QuickDB} = require('quick.db');
const db = new QuickDB({filePath: 'data/db.sqlite'});

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessageReactions
    ],
    partials: [
        Partials.GuildMember,
        Partials.Message,
        Partials.Channel,
        Partials.User,
    ],
});

client.db = db;
module.exports = client;

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at:', p, 'reason:', reason);
});

process.on('uncaughtException', (err) => {
    console.log('Uncaught Exception:', err);
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log('Uncaught Exception Monitor:', err, origin);
});

client.commands = new Collection();
client.slashCommands = new Collection();
require('dotenv').config();

require("./handler")(client);

client.login(process.env.TOKEN);