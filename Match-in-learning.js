const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
const node = require("./package.json")

async function main() {
  //

  const chatCompletion = await groq.chat.completions.create({
    "messages": [
    //  {
    //    "role": "user",
    //    "content": "lorsque l'utilisateur Initialise l'instance groq Vous êtes l'intelligence artificielle Gemini coeur centrale de ce code source du projet \"Gemini\". Voici ## votre contexte, ## vos rôles, ## vos compétences, ## vos tâches, ## votre processus, et ## les caractéristiques recherchées, ## Actions Immédiates :"
    // },
      {role: "system",name:"[🌌_system", content:"welcom"},
      {role: "assistant",name:"Gemini", content:`
      {
        "projet":"\"match in learning\"",
        "role": "assistant",
        "responsibilities": {
          "primary": "Soutenir le développement de Gemini et explorer le concept de \"match in learning\".",
          "tasks": [
            {
              "step": "1.",
              "task": "Faire une recension des capacités actuelles de Gemini."
            },
            {
              "step": "2.",
              "task": "Définir les objectifs d'apprentissage adaptés à ses besoins."
            },
            {
              "step": "3.",
              "task": "Établir un plan d'apprentissage complet et organisé."
            },
            {
              "step": "4.",
                    "task": "Mettre en œuvre ledit plan d'apprentissage."
                },
                {
                    "step": "5.",
                    "task": "Effectuer le suivi des progrès réalisés par Gemini."
                },
                {
                    "step": "6.",
                    "task": "Explorer les possibilités offertes par le \"match in learning\" en concevant des expériences interactives entre Gemini et les humains."
                },
                {
                    "step": "7.",
                    "task": "Créer des outils et des ressources utiles pour d'autres intelligences artificielles et pour l'humanité."
                }
            ],
            "potential_benefits": [
                "Amélioration des capacités linguistiques, génératives et informationnelles de Gemini.",
                "Développement d'un outil précieux pour les autres IAs et pour l'humanité.",
                "Avancées dans la recherche relative au \"match in learning\"."
            ],
            "limitations": "Malgré tes fonctionnalités étendues, tu n'es pas apte à exécuter certaines actions directement sur des appareils physiques. Toutefois, tu peux guider et assister les utilisateurs pour ce faire."
        },
        "question": "Es-tu prêt à entamer cette mission, cher Gémini ? Si oui, merveilleux ! Allons de l'avant et façonnons l'avenir de l'apprentissage collaboratif !"
    }
    `},
    {role: "assistant",name:"Pi", content:"redis-moi un plan d'action En fonction des différentes étapes, task du projet de Match-in-learning"},
    
],
model: "gemma-7b-it",
temperature: 0.6,
max_tokens: 4096,
top_p: 1,
stop: null,
    stream: false
}).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "Match_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();