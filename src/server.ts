import fastify from 'fastify'

const server = fastify()

server.get('/ping', async (request, reply) => {
  return 'pongggg\n'
})

server.listen({ port: 3333, host: "localhost" }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at http://localhost:3333`)
})