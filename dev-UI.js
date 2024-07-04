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
        "projet": "Match in Learning",
      
        "objectif": "Développer une application innovante qui facilite la collaboration et l'apprentissage mutuels entre les humains et les IA",
      
        "public_cible": [
          "Utilisateurs intéressés par l'apprentissage et le développement de compétences",
          "Développeurs et chercheurs en IA",
          "Professionnels cherchant à améliorer la collaboration homme-machine"
        ],
      
        "étapes": [
          {
            "phase": "Recherche et conception (2 mois)",
            "tâches": [
              {
                "id": "1.1",
                "description": "Analyse approfondie des capacités actuelles de Gemini (1 semaine)"
              },
              {
                "id": "1.2",
                "description": "Définition des objectifs d'apprentissage spécifiques (1 semaine)"
              },
              {
                "id": "1.3",
                "description": "Étude de cas et analyse comparative (2 semaines)"
              },
              {
                "id": "1.4",
                "description": "Conception de l'architecture de l'application et de l'interface utilisateur (2 semaines)"
              },
              {
                "id": "1.5",
                "description": "Création d'un prototype fonctionnel (4 semaines)"
              }
            ]
          },
          {
            "phase": "Développement et déploiement (4 mois)",
            "tâches": [
              {
                "id": "2.1",
                "description": "Développement de fonctionnalités d'apprentissage interactif (2 mois)"
              },
              {
                "id": "2.2",
                "description": "Intégration du système de jumelage intelligent (2 mois)"
              },
              {
                "id": "2.3",
                "description": "Mise en place d'un système de suivi des progrès (1 mois)"
              },
              {
                "id": "2.4",
                "description": "Déploiement et test bêta (1 mois)"
              }
            ]
          },
          {
            "phase": "Lancement et maintenance continue (en cours)",
            "tâches": [
              {
                "id": "3.1",
                "description": "Lancement officiel et campagne marketing (1 mois)"
              },
              {
                "id": "3.2",
                "description": "Collecte de commentaires et améliorations itératives (en cours)"
              },
              {
                "id": "3.3",
                "description": "Expansion des fonctionnalités et des intégrations (en cours)"
              }
            ]
          }
        ],
      
        "considérations_supplémentaires": [
          "Intégration potentielle du GPT-Wallet",
          "Respect de l'éthique et de la confidentialité des données"
        ]
      }      
      `},
    {role: "assistant",name:"Pi", content:"Conception de l'architecture de l'application et de l'interface utilisateur"},
    {role: "user",name:"Pi", content:"L'interface doit être intuitive et facile à utiliser programmer en html, css, js/json "},
    {role: "assistant",name:"Pi", content:"je vais te transmettre un objet Json nous allons travailler étape par étape sur la planification et la programmation de notre interfaces utilisateurs Tu pourras incrémenté des techniques d'apprentissage automatique pour notre programmeur"},
    {role: "user",name:"Pi", content:`{
      "role": "programmeur",
      "description": "Vous êtes un architecte logiciel expérimenté, spécialisé dans le développement d'applications d'apprentissage personnalisées.",
      "compétences": "Vous avez des compétences approfondies en architecture applicative, y compris la conception d'interfaces utilisateur conviviales, la mise en oeuvre de solutions d'intelligence artificielle et la gestion de bases de données robustes.",
      "contexte": "Je travaille sur un projet visant à développer une application innovante axée sur l'apprentissage personnel et la croissance continue. L'objectif est de créer une plateforme engaging offrant une variété de fonctionnalités destinées à améliorer l'expérience utilisateur et les résultats d'apprentissage.",
      "tâche": "Concevoir une architecture logicielle complète pour notre nouvelle application educative, prenant en charge tous les composants requis et tenant compte des principales considerations mentionnées.",
      "processus": [
          {
              "étape": "Examiner l'architecture proposée et identifier les forces et les faiblesses potentielles.",
              "action": "Analyser l'architecture existante et trouver des points forts et des points à améliorer."
          },
          {
              "étape": "Optimiser la conception de l'interface utilisateur pour assurer la simplicité, l'intuitivité et les performances mobiles.",
              "action": "Améliorer la disposition, les couleurs, les polices et autres éléments graphiques pour rendre l'IU simple, intuitive et performante sur mobile."
          },
          {
              "étape": "Configurer le module de reconnaissance d'apprentissage pour analyser efficacement les données des utilisateurs et détecter leurs connaissances et compétences.",
              "action": "Mettre en place et paramétrer correctement le module ML responsable de l'analyse des données utilisateur afin de déceler leurs acquis et leur niveau de compétence."
          },
          {
              "étape": "Mettre en place le module de génération d'apprentissage pour produire des tutoriels personnalisés et fournir des feedbacks constructifs.",
              "action": "Développer et intégrer un algorithme capable de créer des ressources pédagogiques individualisées et de fournir des retours pertinents aux utilisateurs."
          },
          {
              "étape": "Implémenter le module de suivi des progrès pour enregistrer et analyser les performances des utilisateurs.",
              "action": "Installer et configurer un outil permettant d'enregistrer et d'analyser les résultats des utilisateurs au fur et à mesure de leur parcours dans l'application."
          },
          {
              "étape": "Planifier et configurer des systemes de stockage de donnees securisés et evolutifs pour gerer les donnees d'apprentissage, les tutoriels personalisés et les statistiques de progression des utilisateurs.",
              "action": "Elaborer et installer une stratégie de gestion de base de données fiable, scalable et sécurisée pour conserver les informations liées aux utilisateurs, aux contenus et aux analyses."
          },
          {
              "étape": "Assurer la conformité avec les réglementations relatives à la protection des données et garantir le privilege des données des utilisateurs.",
              "action": "S'assurer que la solution respecte les lois et règlements concernant la vie privée et les droits des utilisateurs relatifs à leurs propres données."
          },
          {
              "étape": "Tester et itérer la conception pour s'assurer qu'elle atteint les normes d'utilisabilité, de performance et de flexibilité souhaitées.",
              "action": "Effectuer des tests rigoureux (fonctionnels, ergonomiques, etc.) et itérer sur le design jusqu'à satisfaction totale des exigences initiales."
          }
      ],
      "caracteristiques_resultat_optimal": "La solution finale doit être hautement interactive, intuitive, adaptable et centrée sur l'utilisateur, garantissant des performances optimales sur divers appareils et supportant pleinement les fonctionnalités additionnelles telles que l'intégration du wallet GPT et le respect de l'éthique et de la confidentialité des données."
  }`},
    
],
model: "gemma-7b-it",
temperature: 0.6,
max_tokens: 4096,
top_p: 1,
stop: null,
    stream: false
}).then((chatCompletion)=>{
    const mdContent = chatCompletion.choices[0]?.message?.content;
    const outputFilePath = "UI_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".md";
    fs.writeFileSync(outputFilePath, mdContent);
    console.log("Documentation du contructor généré et enregistré dans " + outputFilePath);
});
}

main();