import "dotenv/config"
import fastify from 'fastify'
import { openaiRoutes } from './routes/openai.route'

const server = fastify()

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.register(openaiRoutes)

server.listen({ port: 3333, host: "localhost" }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at http://localhost:3333`)
})