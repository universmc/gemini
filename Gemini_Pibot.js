const { Telegraf } = require('telegraf');
const Groq = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const bot = new Telegraf('7458392614:AAHtMw4vexDqW6bxczx2UIZDR1i1F1CcfN4', {
    telegram: {
      webhookReply: true,
    },
  });

// Fonction pour générer une image avec DALL-E
async function generateImage(prompt) {
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: 1,
      size: "1792x1024",
    });

    const imageUrl = response.data[0].url;
    return imageUrl;
  } catch (error) {
    console.error("Erreur lors de la génération de l'image :", error);
    throw new Error("Impossible de générer l'image.");
  }
}

// Commande /imagine pour générer et envoyer une image
bot.command('imagine', async (ctx) => {
  // Extraire l'entrée de l'utilisateur du message Telegram
  const userInput = ctx.message.text.split(' ').slice(1).join(' ');

  // Vérifier si l'utilisateur a fourni un prompt
  if (!userInput) {
    ctx.reply("Veuillez fournir une description pour générer l'image. Exemple: `/imagine une ville futuriste sous la pluie`");
    return;
  }

  ctx.reply("Génération de l'image en cours, veuillez patienter...");

  try {
    const imageUrl = await generateImage(userInput);

    // Télécharger et envoyer l'image à l'utilisateur
    const responseFetch = await fetch(imageUrl);
    const arrayBuffer = await responseFetch.arrayBuffer(); // Utilise arrayBuffer pour récupérer les données de l'image
    const buffer = Buffer.from(arrayBuffer); // Convertit ArrayBuffer en Buffer
    const fileName = `Puzzle_${new Date().toISOString().replace(/[:.]/g, "-")}.webp`;

    fs.writeFileSync(fileName, buffer);

    // Envoyer l'image à l'utilisateur via Telegram
    await ctx.replyWithPhoto({ source: fileName }, { caption: `Voici votre image générée : ${userInput}` });

    // Supprimer le fichier après l'envoi pour économiser l'espace disque
    fs.unlinkSync(fileName);
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'image :", error);
    ctx.reply("Désolé, une erreur s'est produite lors de la génération de l'image.");
  }
});



async function generateMarkdown(subject) {
  return `## Comment [${subject}] - Un guide étape par étape\n\n**Introduction**:\n\nCe guide vous aidera à comprendre et à réaliser le [${subject}]. Il est conçu pour les débutants et les utilisateurs intermédiaires qui souhaitent apprendre les bases de [${subject}].\n\n`;
}


async function main(subject) {
  try {
    const completion = await groq.chat.completions.create({
      model: "gemma2-9b-it",
      messages: [
          { role: "assistant", content: `Génération d'un guide Le rôle de développeur chez OpenAI` },
        { role: "user", content: `Génération d'un guide sur ${subject}` },
        { role: "system", content: `bienvenue sur Telegram` }
      ],
      temperature: 0.5,
      max_tokens: 4096
    });

    const mdContent = completion.choices[0].message.content;
    const outputFilePath = `HowTo_nodeJj-${subject}_` + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);

    return `Le How-To sur ${subject} a été enregistré dans ${outputFilePath}`;
  } catch (error) {
    console.error("Une erreur s'est produite :", error);
    return `Erreur : ${error.message}`;
  }
}

bot.command('generate', async (ctx) => {
  const subject = ctx.message.text.split(' ')[1] || 'HowTo_OpenAi';
  ctx.reply(`Génération du guide pour le sujet : ${subject}...`);
  const result = await main(subject);
  ctx.reply(result);
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
    console.log(`Server Telegram running ✨.Gemini_Pibot.`);
    bot.launch();