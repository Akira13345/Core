const client = require('../../../index');

client.on("presenceUpdate", async (oldPresence, newPresence) => {

    const role = process.env.PRESENCE_ROLE;
    const strings = process.env.PRESENCE_STRING;

    const member = newPresence.member;

    if (!member) {
        console.error("Impossible de récupérer les informations des membres.");
        return;
    }

    const oldActivityState = oldPresence?.activities[0]?.state ?? "";
    const newActivityState = newPresence?.activities[0]?.state ?? "";

    const hasKeywordNow = newActivityState.includes(strings);
    const hadKeywordBefore = oldActivityState.includes(strings);

    try {
        if (hasKeywordNow && !hadKeywordBefore) {
            await delay(5000);
            await member.roles.add(role);
        } else if (!hasKeywordNow && hadKeywordBefore) {
            await delay(5000);
            await member.roles.remove(role);
        }
    } catch (error) {
        console.error(`Une erreur est survenue avec ${member.user.tag} :`, error.message);
    }
});

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}