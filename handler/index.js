const fs = require("fs").promises;
const path = require("path");
const chalk = require("chalk");

module.exports = async (client) => {
    const modulesDir = path.join(process.cwd(), "modules");

    try {
        const moduleFolders = await fs.readdir(modulesDir, {withFileTypes: true});

        const moduleNames = moduleFolders
            .filter((dirent) => dirent.isDirectory())
            .map((dirent) => dirent.name);

        console.log(chalk.blue(`[HANDLER] ${moduleNames.length} modules trouvés`));

        for (const moduleName of moduleNames) {
            const moduleDir = path.join(modulesDir, moduleName);

            const eventDir = path.join(moduleDir, "events");
            try {
                await fs.access(eventDir);
                const eventFiles = await fs.readdir(eventDir);
                console.log(chalk.blue(`[HANDLER] Chargement de ${eventFiles.length} events pour le module ${moduleName}`));

                for (const file of eventFiles) {
                    const eventPath = path.join(eventDir, file);
                    require(eventPath);
                }
            } catch (eventError) {
            }

            const commandDir = path.join(moduleDir, "commands");
            try {
                await fs.access(commandDir);
                const commandFiles = await fs.readdir(commandDir);
                console.log(chalk.blue(`[HANDLER] Chargement de ${commandFiles.length} commandes pour le module ${moduleName}`));

                for (const file of commandFiles) {
                    const commandPath = path.join(commandDir, file);
                    const command = require(commandPath);
                    if (command?.name) {
                        await client.commands.set(command.name, command);
                        if (["MESSAGE", "USER"].includes(command.type)) delete command.description;
                    }
                }
            } catch (commandError) {
            }
        }

        client.on("ready", async () => {
            const arrayOfSlashCommands = Array.from(client.commands.values());
            await client.application.commands.set(arrayOfSlashCommands);
        });
    } catch (error) {
        console.error(chalk.red(`[ERREUR] Une erreur s'est produite : ${error.message}`));
    }
};