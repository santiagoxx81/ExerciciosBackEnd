const mysql = require ('mysql2')

const db=mysql.createConnection({
    hots:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
})
db.connect(erro=>{
    if (erro) throw erro;
    console.log('Conexão realizada com sucesso - Mysql')
})
module.exports = db