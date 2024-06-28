const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function main() {
  //

  const chatCompletion = await groq.chat.completions.create({
    "messages": [
    //  {
    //    "role": "user",
    //    "content": "lorsque l'utilisateur Initialise l'instance groq Vous êtes l'intelligence artificielle Gemini coeur centrale de ce code source du projet \"Gemini\". Voici ## votre contexte, ## vos rôles, ## vos compétences, ## vos tâches, ## votre processus, et ## les caractéristiques recherchées, ## Actions Immédiates :"
    // },
      {role: "system",name:"[🌌_system", content:"welcom "},
      {role: "assistant",name:"[📔_codex]", content:"[📔.codex]_Phase[01]:[RUN]:[brainstorming[.Generator.]]"},
      {role: "user",name:"[🌴_Groq]", content: "[🌴_Groq]+[promptmodel]+[🤖_emojis.sh]+[[💬emojispicker]!" },
    
      {role: "system", content:"Phase 1: Initialisation de l'instance"},
      {role: "system", content:
      `
      {
        "nom": "Gemini",
        "type": "intelligence artificielle de grande taille",
        "développeur": "https://g.dev/universmc",
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
    },
    {role: "system", content:"Phase 2: présentation et planification du projet"},
    {role: "system", content:`{
      "projet" : {
        "nom" : "Allocations universelles basées sur le curriculum vitae numérique",
        "modeleEconomique" : "modèle d'économie circulaire",
        "objectifs" : [
          "Réduire la pauvreté en fournissant des moyens de subsistance aux individus.",
          "Stimuler l'économie en encourageant le développement des compétences et la formation.",
          "Promouvoir l'inclusion financière en donnant accès aux services financiers à tous."
        ],
        "phases" : [
          {
            "phaseName" : "Phase 1: Définition et conception",
            "duree" : "10 jours",
            "taches" : [
              {
                "rangeJoursTask" : "Jour 1-5",
                "description" : "Spécifier les objectifs et les fonctionnalités du projet, les critères d'éligibilité, les niveaux de Curriculum vitae (CV utilisateurs), les exigences, le système de paiement, et les principes de durabilité à long terme."
              },
              {
                "rangeJoursTask" : "Jour 6-10",
                "description" : "Concevoir l'architecture de l'application et l'interface utilisateur, définir les modules, les fonctionnalités, créer des prototypes, choisir les outils et la pile technologique."
              }
            ]
          },
          {
            "phaseName" : "Phase 2: Développement",
            "duree" : "20 jours",
            "taches" : [
              {
                "rangeJoursTask" : "Jour 11-15",
                "description" : "Développer les systèmes back-end incluant la configuration de la base de donnée, les APIs, la gestion des profils, le suivi des compétences, et le système de paiement sécurisé utilisant l'intégration de la blockchain."
              },
              {
                "rangeJoursTask" : "Jour 16-20",
                "description" : "Implémenter les fonctionnalités frontales telles que l'enregistrement, la connexion, la gestion des profils, l'ajout de compétences, la génération de CVNs, et l'affichage de l'information sur le revenu."
              },
              {
                "rangeJoursTask" : "Jour 21-25",
                "description" : "Tester l'application soigneusement, débugguer les problèmes, conduire des tests utilisateurs, collecter les retours, perfectionner l'UI en se basant sur les acquis durant les phases de tests."
              }
            ]
          },
          {
            "phaseName" : "Phase 3: Déploiement et maintenance",
            "duree" : "10 jours",
            "taches" : [
      {
        "rangeJoursTask" : "Jour 26-30",
        "description" : "Paramétrer l'environnement d'hébergement, déployer le codebase et les bases de données, tester la configuration de déploiement, assurer la stabilité, l'extensibilité, et la sécurité."
      },
      {
        "rangeJoursTask" : "Jour 31-40",
        "description" : "Surveiller la santé de l'application, rectifier les problèmes emergents, fournir une assistance technique, actualiser la documentation, répondre aux interrogations des utilisateurs, maintenir l'infrastructure."
      }
    ]
  }
],
"considerationsSupplementaires" : [
  "Méthodologie de Gestion de Projet",
  "Canaux de Communication Clairs",
  "Documentation Technique Detaillée",
  "Mesures de Sécurité"
]
}
}`},
//{role: "system", content:"Phase 3: rédigez la Présentation detaillé du projet 'Allocations universelles basées sur le curriculum vitae numérique'. Gemini tu utiliseras une Approche métaphysique et professionnel pour présenter le projet"},
{role: "assistant",name:"[📔_codex]", content:"[Projet] > 'gpt-wallet' :  CV Universel et Économie Circulaire Universelle - Une Synergie entre Intelligence Artificielle, Blockchain et Fiscalité Objectifs : Le projet CV Universel et Économie Circulaire Universelle vise à établir une synergie entre l'intelligence artificielle, la blockchain et la fiscalité pour réguler le pouvoir d'achat et valoriser les compétences des individus. Notre ambition est de créer un écosystème économique durable en combinant deux éléments clés : un CV universel et un modèle d'économie circulaire géré par une intelligence artificielle hautement efficace. Le rôle de @MandatoryAi_bot - L'Intelligence Artificielle Mandataire Financier : @MandatoryAI_bot est une intelligence artificielle sur Telegram avancée qui joue le rôle de mandataire financier dans notre écosystème économique. Il a deux fonctionnalités principales : la collecte et la décaissement de la TVA, ainsi que le virement des fonds collectés vers les utilisateurs du CV universel.  1. Collecte et décaissement de la TVA : Mandiant collecte la TVA sur les biens et services, gère les formalités administratives et comptables liées à cette taxe. Le montant de la TVA perçue est ensuite converti en notre crypto-monnaie UMC token.2. Virement sur les CV universels : Le montant collecté sous forme de TVA et converti en UMC token est ensuite transféré aux utilisateurs du CV universel. Le virement s'effectue en fonction des compétences et de l'expérience professionnelle de l'utilisateur, en utilisant un smart contrat Solidity.L'intégration de la blockchain dans notre modèle permet d'assurer la transparence, la sécurité et la traçabilité des transactions effectuées. L'utilisation d'une crypto-monnaie, l'UMC token, permet de stocker la valeur de la TVA collectée sous une forme numérique sécurisée. Impact et perspectives :Le projet 'CV Universel et Économie Circulaire Universelle' vise à transformer le paradigme économique en favorisant une économie plus équitable, durable et orientée vers les compétences. La synergie entre l'intelligence artificielle, la blockchain et la fiscalité permet de créer un écosystème financier innovant qui contribue à un changement positif dans la société."},
{role: "system", content:"Phase 3: Configuration"},
{role: "assistant",name:"[📔_codex]", content:"devOps la Présentation du projet"},
{role: "user",name:"[📔_codex]", content:"devops Wirefram app pages.html style.css async script.js backend.json"},
{role: "assistant",name:"[📔_codex]", content:"La Présentation Projet doit être rédigé au format HTML section par section respectant les normes du Web sémantique W3C > index.html Tu utilisera un style CSS de couleur gris clairs épuré simplifié avec une note pour oranger"},

],
model: "gemma-7b-it",
temperature: 0.6,
max_tokens: 2048,
top_p: 1,
stop: null,
    stream: false
}).then((chatCompletion)=>{
    const htmlContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "WorkPlan_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".html";
    fs.writeFileSync(outputFilePath, htmlContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();