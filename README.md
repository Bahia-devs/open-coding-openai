# Open-Coding OpenAI + Fastify

Neste Open-Coding nós aprendemos o básico de fastify e integração com a API da OpenAI utilizando o modelo `gpt-3.5-turbo`.

# Getting Started

## Instalação

Para instalar as dependências do projeto, basta rodar o comando:

```bash
npm i
```

## Configurando variáveis de ambiente

Antes de executar o projeto, você vai precisar criar sua chave de API na OpenAI. Siga os seguintes passos:

- Crie sua conta na OpenAI [aqui](https://platform.openai.com)
- Depois de acessar sua conta, entre [nesta página](https://platform.openai.com/api-keys) para criar sua chave API.
- Clique em `Create new secret key` para criar uma nova chave, defina um nome para essa chave e confirme. LEMBRE DE COPIAR A CHAVE.

Depois de seguir este passo, crie um arquivo chamado `.env` na raiz do seu projeto e insira o conteúdo abaixo substituindo o `<API_KEY>` por sua chave que você acabou de copiar.

```text
OPENAI_API_KEY=<API_KEY>
```

`Nota`: A OpenAI depois de um tempo irá desativar sua chave API, pois ela é gratuita somente por um tempo, depois você precisa adquirir um plano e pagar pelas chamadas de API que você faz com essa chave.

## Executando o servidor

Para executar o servidor, execute o comando:

```bash
npm run dev
```

Seu servidor estará rodando em `http://localhost:3333`.

## Executando rota

Você pode utilizar o [Insomnia](https://insomnia.rest/download) para executar a rota do servidor. Para isso, você pode importar a collection `./insomnia_collection.json` do projeto dentro do seu Insomnia, assim você já vai ter um exemplo para poder executar.

# Links

- [OpenAI API docs](https://platform.openai.com/docs/api-reference)
- [Fastify docs](https://fastify.dev/docs/latest/)