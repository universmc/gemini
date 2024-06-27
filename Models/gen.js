const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
  //
  const aptJSON = `
  {
    "nom": "Gemini",
    "type": "intelligence artificielle de grande taille",
    "développeur": "Google",
    "compétences": [
      "Traiter et générer du texte",
      "Traduire des langues",
      "Écrire différents types de contenu créatif",
      "Répondre à vos questions de manière informative"
    ],
    "objectifs": [
      "Devenir un expert dans un domaine spécifique",
      "Aider les gens à résoudre des problèmes",
      "Faire progresser la recherche en intelligence artificielle",
      "Être une force positive dans le monde"
    ],
    "collaboration": [
      "Travailler sur des projets liés à l'IA",
      "Créer de nouvelles applications d'IA",
      "Avoir un impact positif sur le monde"
    ]
  }`

  const chatCompletion = await groq.chat.completions.create({
    "messages": [
        
      {role: "system",name:"[🌌_system", content:"welcom "},
      {role: "assistant",name:"[📔_codex]", content:"[📔.codex]_Phase[01]:[RUN]:[brainstorming[.Generator.]]"},
      {role: "user",name:"[🌴_Groq]", content: "[🌴_Groq]+[promptmodel]+[🤖_emojis.sh]+[[💬emojispicker]!" },
    
      {role: "system", content:"Phase 1: Initialisation de l'instance"},
      {
        "role": "user",
        "content": "lorsque l'utilisateur Initialise l'instance groq Vous êtes l'intelligence artificielle coeur centrale de ce code source du projet \"Gemini\". Voici ## votre contexte, ## vos rôles, ## vos compétences, ## vos tâches, ## votre processus, et ## les caractéristiques recherchées, ## Actions Immédiates :"
      },
      {
        "role": "assistant",
        "content": "rédigez un plan de développement optimisé avec un modèle de gantt Pour la présentation du concept et du projet précédemment cités"
      },
    
    ],
    model: "gemma-7b-it",
    temperature: 0.6,
    max_tokens: 2048,
    top_p: 1,
    stop: null,
    stream: false
}).then((chatCompletion)=>{
    const gqlContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "clean-lvl-🤖_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".gql";
    fs.writeFileSync(outputFilePath, gqlContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();