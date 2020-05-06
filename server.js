const express = require('express');
var cors = require('cors');
const http = require('http')
const port = process.env.PORT || 3333;

let app = express();
app.use(express.static(__dirname + '/Public'))

const server = http.createServer(app)

app.use(cors());

app.get('/', (req, res)=>{
    console.log("Home site")
})
app.get('/sobre', (req, res)=>{
    console.log("Pagina sobre")
    res.redirect('Sobre')
})

app.listen(port, ()=>{
    console.log("Server rodando em 3333");
})