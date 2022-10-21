const { Telegraf } = require('telegraf')
const { v4: uuidV4 } = require('uuid')
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.on('text', async (ctx) => {
    
    let response = "Hey You";
    ctx.reply(response)
  });

bot.start((ctx) => {
	let message = `Please use the /kusseke command to recevoir un bisous`
	ctx.reply(message)
})


bot.command('kusseke', async (ctx) => {
    try {
        ctx.reply('Preparation du bisous...')
        ctx.reply('😘')
        
    } catch (error) {
        console.log('error', error)
        ctx.reply('error sending image')
    }
})

bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
