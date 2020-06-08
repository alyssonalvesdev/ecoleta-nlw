// importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o objeto que irá fazer operações no BD
const db = new sqlite3.Database("./src/database/database.db")


//exportar objeto DB
module.exports = db


//utilizando o objeto de banco de dados 
// db.serialize()
{
    
    //Com comandos SQL
    //Criar uma tabela 
    // db.run(`
    //     CREATE TABLE IF NOT EXISTS places(
    //         id INTEGER PRIMARY KEY AUTOINCREMENT,
    //         name TEXT,
    //         address TEXT,
    //        address2 TEXT,
    //         state TEXT,
    //         city TEXT,
    //         image TEXT,
    //         items TEXT
    //     );
    // `)

    // //Insetir dados na tabela
    // const query = `
    //     INSERT INTO places (
    //         name,
    //         address,
    //         address2,
    //         state,
    //         city,
    //         image,
    //         items
    //     ) VALUES (?,?,?,?,?,?,?);
    // `
    // const values = [
    //     "Papersider",
    //     "Av são paulo",
    //     "N° 55",
    //     "São paulo",
    //     "São paulo",
    //     "https://images.unsplash.com/photo-1516992654410-9309d4587e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    //     "Papéis e Papelão"
    // ]

    // function afterInsertData(err) {
    //     if(err) {
    //         return console.log(err)
    //     }

    //     console.log("Cadastrado com sucesso")
    //     console.log(this)
    // }

    // db.run(query, values, afterInsertData)



    //Consultar os dados da tabela
    //db.all(`
    //SELECT *FROM places`, function(err, rows){
    //    if(err) {
    //        return console.log(err)
    //    }
    //
    //    console.log("Aqui estão seus registros: ")
    //    console.log(rows)
    //
    //})


    //Deletar um dado da tabela

    //db.run(`DELETE FROM places WHERE id = ?`, [4], function(err){
    //   if(err) {
    //        return console.log(err)
    //    }
    //
     //   console.log("Registro deletados com sucesso!")
    //})


}   