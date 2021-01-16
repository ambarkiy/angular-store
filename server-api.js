const DIR = './src/app/domain/data';
const PORT = 4000;

const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')

const router = jsonServer.router(path.join(DIR, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares);
server.use(router);


server.listen(PORT, () => {
  console.log('JSON Server is running')
})

