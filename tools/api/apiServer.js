const jsonServer = require('json-server')
const server = jsonServer.create()
const data = require('./db.js')
const router = jsonServer.router(data())
const middlewares = jsonServer.defaults()

const db = router.db;

const putMiddleware = (req, res, next) => {
   console.log(req.path);
   // if (req.method == 'PATCH' && req.path.substr(0, 7) == '/todos/') {
   //    const parts = req.path.split('/');
      
   //    const counters = db.get("todos");
   //    console.log(counters);
   //    if (parts[3] === 'active') {
   //       const counter = counters.getByFilter(todos.completed = false);
   //     //  ++counter.count;
   //       res.locals.data = counter;
   //    }
   //    else if (parts[3] === 'completed') {
   //       const counter = counters.getByFilter(todos.completed = false);
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
