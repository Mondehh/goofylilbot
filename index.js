const { CommandClient } = require('eris')

// Stupid ass bot creation
async function init(token) {
    const sillygoofyhaha = new CommandClient(`Bot ${token}`, { intents: ['guilds'], maxShards: 'auto',restMode: true })
    // Register the stupid ass command
    sillygoofyhaha.on('ready', async () => {
        await sillygoofyhaha.bulkEditCommands([{
            name: 'lol',
            description: 'I hate discord so much you cannot believe it',
            type: 1,
        }])
        console.log(`Paste the URL below into your browser to invite your bot!\nhttps://discord.com/oauth2/authorize?client_id=${sillygoofyhaha.user.id}&scope=applications.commands%20bot&permissions=3072`)
    })
    // Stupid ass interaction creation event
    sillygoofyhaha.on('interactionCreate', async (interaction) => {
        if (interaction?.data?.name === 'sus') {
            await interaction.createMessage({
                content: 'ඞ'
            })
            console.log('Goodbye...')
            process.exit(0)
        }
    })
    sillygoofyhaha.connect();
}

const Token = process.argv[2]
init(Token);
