const jsonServer = require('json-server')
const server = jsonServer.create()
const data = require('./db.js')
const router = jsonServer.router(data())
const middlewares = jsonServer.defaults()

const db = router.db;
const putMiddleware = (req, res, next) => {
  // console.log(req.path.substr(0, 6) == '/todo/');
   // if (req.method == 'PATCH' && req.path.substr(0, 5) == '/todo/') {
   //    const parts = req.path.split('/');
      
   //    const counters = db.get("todos");
      
   //    if (parts[3] === 'increment') {
   //       const counter = counters.getById(parts[2]).value();
   //       ++counter.count;
   //       res.locals.data = counter;
   //    }
   //    else if (parts[3] === 'decrement') {
   //       const counter = counters.getById(parts[2]).value();
   //       --counter.count;
   //       res.locals.data = counter;
   //    }
   // }
   console.log('------------------------------------------------------------------------- ');
   
   next();
}
// CUSTOM SHIT

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.use(putMiddleware)
server.use(router)
server.listen(3001, () => {
   console.log('JSON Server is running')
})
