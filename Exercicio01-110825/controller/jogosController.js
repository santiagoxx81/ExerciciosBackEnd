const db = require('../db')

exports.getAll = (req, res)=>{
    const sql = 'select * from jogos'
    db.query(sql,(erro,resultado)=>{
        if(erro) return res.status(500).json({erro:erro})
            res.json(resultado)
    })
}
exports.create = (req, res)=>{
    const {nome,tipo,ano}=req.body;
    
    const sql = 'insert into jogos (nome,tipo,ano) values (?,?,?)'
     db.query(sql, [nome, tipo, ano], (erro) => {
        if(erro) return res.status(500).json({erro: erro})
            res.status(201).json({ mensagem: 'Jogo criado com sucesso!!' })
    })
}
exports.update = (req,res)=>{
    const {id}=req.params;
    const {nome,tipo,ano} = req.body;
    const sql = 'update jogos set nome = ?, tipo = ?, ano = ? where id = ?'
    db.query(sql, [nome, tipo, ano, id], (erro)=>{
        if (erro) return res.status(500).json({erro: erro})
            res.json({mensagem: 'Jogo atualizado com sucesso!!'})
    })
}
exports.delete=(req,res)=>{
    const {id} = req.params;
    const sql = 'delete from jogos where id = ?'
    db.query(sql,[id],(erro)=>{
        if (erro)return res.status(500).json({erro:erro})
            res.json({mensagem: 'jogo excluído com sucesso!!'})
    })
}
