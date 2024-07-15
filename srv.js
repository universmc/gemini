const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const bot = new Telegraf('6215630445:AAFFcWUgrsPvVFN5ZjY1F1b9CplyXZ-AAVU', {
    telegram: {
      webhookReply: true,
    },
  });

    let conversationLog = [];

    bot.use((ctx, next) => {
      if (ctx.message) {
        conversationLog.push({
          user: ctx.message.from.username || ctx.message.from.first_name,
          message: ctx.message.text,
          timestamp: new Date()
        });
      }
      return next();
    });
    
    bot.start((ctx) => {
      ctx.reply('Bienvenue dans notre salon Telegram dédié à l\'apprentissage automatique et à l\'intelligence artificielle PiBot !');
    });
    
    
    bot.help((ctx) => {
      const helpMessage = `
      Commandes disponibles:
      /start - Initialisation du serveur
      /help - Affiche cette aide
      /invite - Inviation sur les reseau
      /campagne - Campagne match in learning
      /dev - Mode developpement
      /conversation_log - Historique
      `;
        ctx.reply(helpMessage);
      });
    
    
    bot.command('conversation_log', (ctx) => {
      if (conversationLog.length === 0) {
        ctx.reply('Aucune conversation enregistrée.');
        return;
      }
    
      let logMessage = 'Bilan de la conversation:\n';
      conversationLog.forEach(entry => {
        logMessage += `[${entry.timestamp.toLocaleString()}] ${entry.user}: ${entry.message}\n`;
      });
    
      ctx.reply(logMessage);
    });
    
    bot.command('invite', (ctx) => {

      async function sendFacebookInvitation() {
        // Implement the logic to send invitations on Facebook
        console.log('Facebook invitation sent.');
      }

      async function sendInstagramInvitation(
      ) {
        // Implement the logic to send invitations on Instagram
      console.log('Instagram invitation sent.');
      }
      
      async function sendTikTokInvitation(
      ) {
        // Implement the logic to send invitations on TikTok
      console.log('TikTok invitation sent.');
      }
      
      async function sendYouTubeInvitation(
      ) {
        // Implement the logic to send invitations on YouTube
      console.log('YouTube invitation sent.');
      }
      
      async function sendGoogleInvitation(
      ) {
        // Implement the logic to send invitations on Google
      console.log('Google invitation sent.');
      }
      
      
      ctx.reply('Veuillez spécifier les actions à effectuer sur les reseau (/Google, /Facebook, /Instagrm, /TikToc, /YouTube.)');
    });
    

    
    bot.command('campagne', (ctx) => {
      // Ajouter la logique pour générer un CV en fonction de l'apprentissage automatique de l'IA

      ctx.reply('Match in Learning..');
    });
    
    
    bot.on('message', async (ctx) => {
      const message = ctx.message.text.trim().toLowerCase();
    
     // const invitationOptions = {
     //   'Facebook': sendFacebookInvitation,
     //   'Instagram': sendInstagramInvitation,
     //   'TikTok': sendTikTokInvitation,
     //   'YouTube': sendYouTubeInvitation,
     //   'Google': sendGoogleInvitation,
     // };


      // Détecte si le message commence avec la commande "/"
      if (message.startsWith('/')) {
          try {
              const chatCompletion = await groq.chat.completions.create({
                  messages: [
                      { role: 'system',content: "Tu es l'intelligence artificielle au cœur de ce salon Télégramm @user_Pitbot, Nous allons créer des invitations pour notre salon sur les réseaux sociaux (Youtube, facebook, google, instagram, Tik-tok) sur mon app-Telegram https://univers-mc.cloud/Telegram/ dont j'en suis l'administrateur) ?"},
                        
                  ],
                  model: 'gemma2-9b-it',
              });
    
    
              await ctx.reply(chatCompletion.choices[0].message.content);
          } catch (error) {
              console.error('Failed to generate chat completion:', error);
              await ctx.reply('Une erreur est survenue.');
          }
      }
      });
    
    async function chatCompletion(messages, model) {
      try {
          // Crée une session de brainstorming avec Groq
    const chatCompletion = await groq.chat.completions.create({
              messages,
              model,
          });
    
          return chatCompletion.choices[0].message.content;
      } catch (error) {
          console.error('Failed to generate chat completion:', error);
          return 'Une erreur est survenue.';
      }
    }
    
    module.exports = { chatCompletion };
    console.log(`Server Telegram running ✨.user_Pibot.`);
    bot.launch();