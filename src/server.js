const express = require("express")
const server = express()

//pegar o banco de dados
const db = require("./database/db")

//Utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//Configurar pasta publica
server.use(express.static("public"))

//Habilitar o uso do req.body na nossa aplicação
server.use(express.urlencoded({ extended: true}))

//Para rederizar com o "render" é necessario o engine
//Configurar caminhos da aplicação
server.get("/", function(req, res){
    return res.render("index.html")
})

server.get("/cadastro", function(req, res){
    //req.query: Query strings da nossa url
    //console.log(req.query)


    return res.render("cadastro.html")
})

server.post("/savepoint",(req,res) =>{
    //req.doby: O corpo do nosso formulário
    //console.log(req.body)


    const query = `
        INSERT INTO places (
            name,
            address,
            address2,
            state,
            city,
            image,
            items
        ) VALUES (?,?,?,?,?,?,?);
    `
    const values = [
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.image,
        req.body.items
    ]

    function afterInsertData(err) {
        if(err) {
            console.log(err)
            return res.send("Erro no servidor")

        }

        console.log("Cadastrado com sucesso")
        console.log(this)

        return res.render("cadastro.html", { saved: true})
    }

    db.run(query, values, afterInsertData)

    
})

server.get("/search-results", function(req, res){

    const search = req.query.search

    if(search == "") {
        //pesquisa vazia
        return res.render("search-results.html", {total:0})
    }

    //pegar os dados do banco de dados 
    db.all(`
        SELECT * FROM places WHERE city LIKE '%${search}%'`, function(err, rows){
            if(err) {
            return console.log(err)
        }

        const total = rows.length

        //mostrar a página html com os dados do bd
        return res.render("search-results.html", {places: rows, total})
    })



    
})


//ligar o servidor

server.listen(3000)
