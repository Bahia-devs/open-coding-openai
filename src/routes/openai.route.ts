import { FastifyInstance, FastifyRequest } from "fastify";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function openaiRoutes(app: FastifyInstance){
  const messages: ChatCompletionMessageParam[] = [
          { role: "system", content: "Você é um programador de software, especialista em backend." },
          { role: "user", content: "Qual a melhor linguagem para iniciar no desenvolvimento backend?" },
          { role: "assistant", content: "A escolha da linguagem de programação para backend depende de vários fatores, como a finalidade do projeto, a equipe de desenvolvimento disponível e as preferências pessoais. No entanto, algumas linguagens populares para desenvolvimento backend são:\n\n1. Java: É uma linguagem versátil, com uma grande comunidade e uma grande quantidade de frameworks e bibliotecas disponíveis.\n\n2. Python: É uma linguagem de alto nível, com uma sintaxe simples e limpa. Possui uma grande variedade de frameworks e é muito utilizada em ciência de dados.\n\n3. Ruby: É uma linguagem conhecida por ser simples e expressiva. É frequentemente utilizada com o framework Ruby on Rails para desenvolvimento web ágil.\n\n4. JavaScript (Node.js): Com o uso do Node.js, JavaScript pode ser utilizado tanto no frontend como no backend, o que faz dele uma linguagem popular para desenvolvimento full-stack.\n\n5. C#: É uma linguagem desenvolvida pela Microsoft, voltada principalmente para o desenvolvimento de aplicativos para o ecossistema Windows.\n\nEssas são apenas algumas opções, e cada uma delas possui vantagens e desvantagens. Recomendo avaliar as necessidades do projeto e estudar a linguagem que mais lhe chamar atenção para começar a desenvolver no backend." },
          { role: "user", content: "Liste os frameworks backend mais famosos do javascript." }
        ]

  app.get("/ai", async()=>{
    try{
      const completion = await openai.chat.completions.create({
        messages,
        model: "gpt-3.5-turbo"
      })

      return { message: completion.choices[0].message.content }
    }catch(err){
      console.log(err)
    }
  })

  app.post("/ai/new-message", async(request: FastifyRequest)=>{
    const {userMessage} = request.body as any;

    messages.push({ role: "user", content: userMessage })

    const completion = await openai.chat.completions.create({
        messages,
        model: "gpt-3.5-turbo"
    })

    messages.push({role: "assistant", content: completion.choices[0].message.content});

    console.log(messages);

    return completion.choices[0].message.content
  })
}