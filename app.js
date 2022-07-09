const express = require('express')
const http = require('http')
const socketio = require("socket.io");

const soket_server = socketio.Server
const port = process.env.OPRT || 3000

const app = express()

// set static file
app.use(express.static(__dirname + '/public'))

// viwe path
app.set('viwes', __dirname + 'views')
// set viwe engine
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('home', {})
})


const server = http.createServer(app)
server.listen(port, '0.0.0.0', () => {
  console.log(`run in ${app.get('env')} mode on por ${port}`)
})

// socketio serve
const io = new soket_server(server);


io.on('connection', socket => {
  console.log('New user connected')
})
