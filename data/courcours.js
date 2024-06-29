const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();
async function main() {
    groq.chat.completions.create({
        //
        // Required parameters
        //
        messages: [
            // Set an optional system message. This sets the behavior of the
            // assistant and can be used to provide specific instructions for
            // how it should behave throughout the conversation.
        
            {
                role: "system",
                content: "Génère le code HTML d'une page d'index.html clone la  charte graphique et design le style.css du site web du concours google for gémini de référence https://ai.google.dev/competition?hl=fr"
            },
            {
                role: "assistant",
                content: "Voici le code HTML et css de page index.html et le style.css devrat d'adapter suivant les lignes esthétiques di site de référence pour le concours google > Construire l'avenir avec l'API Gemini Participation au concours pour les développeurs de l'API Gemini 2024:"
            },
        
            // Set a user message for the assistant to respond to.
            {
                role: "user",
                content: "groq index.html et style.css"
            }
        ],
        // The language model which will generate the completion.
        model: "gemma-7b-it",
        //
        // Optional parameters
        
        // Controls randomness: lowering results in less random completions.
        // As the temperature approaches zero, the model will become deterministic
        // and repetitive.
        temperature: 0.5,
        // The maximum number of tokens to generate. Requests can use up to
        // 2048 tokens shared between prompt and completion.
        max_tokens: 4096,
        // Controls diversity via nucleus sampling: 0.5 means half of all
        // likelihood-weighted options are considered.
        top_p: 1,
        // A stop sequence is a predefined or user-specified text string that
        // signals an AI to stop generating content, ensuring its responses
        // remain focused and concise. Examples include punctuation marks and
        // markers like "[end]".
        stop: null,
        // If set, partial message deltas will be sent.
        stream: false
    }).then((chatCompletion)=>{
        // Print the completion returned by the LLM.
        const htmlContent = chatCompletion.choices[0]?.message?.content;
        const outputFilePath = "html_" + new Date().toISOString().replace(/[-:TZ]/g, "") + ".html";
        fs.writeFileSync(outputFilePath, htmlContent);
        console.log("Code HTML généré et enregistré dans " + outputFilePath);
    });

}
main();





