const Usuario = require('../models/usuario');
const TOKEN = "vh2@21token";

const UsuarioController = {
  index: async (req, res, next) => {
    if(req.headers.token==TOKEN){

      const usuario = await Usuario.find();
      return res.status(200).send(usuario);
    }else{
      res.status(401).send({error:'Acesso negado API produtos-Token header inválido'});
    }

  },
  create: async (req, res, next) => {
    if(req.headers.token == TOKEN){
      try {
        await Usuario.create({ 
          nome: req.body.nome, 
          cpf: req.body.cpf, 
          telefone: req.body.telefone,
          endereco: req.body.endereco, 
          email: req.body.email, 
          banco: req.body.banco, 
          nivel_investidor: req.body.nivel_investidor 
        });
        res.status(204).send({});
      }catch(err){
        res.status(401).send(`Erro ${err}`);
      }
    }
    else {
        res.status(401).send(`Acesso negado, token inválido`)
    }
    
  },
  change: async (req, res, next) => {
    if(req.headers.token == TOKEN)
    {
      try
      {
          await Usuario.findOneAndUpdate(
          {nome: req.body.nome}, 
          {cpf: req.body.cpf, 
          telefone: req.body.telefone,
          endereco: req.body.endereco, 
          email: req.body.email, 
          banco: req.body.banco, 
          nivel_investidor: req.body.nivel_investidor} 
        )
        res.status(204).send(`Alterado com o id ${req.body.usuario_id}`) 
      }
      catch(err){
        res.status(401).send(`Erro: ${err}`)
      }
    }
    else{
      res.status(401).send(`Acesso negado, token inválido`)
    }

  }, 
  delete: async (req, res, next) => {
    if(req.headers.token == TOKEN)
    {
      try 
      {
        await Usuario.findOneAndDelete({_id: req.params.usuario_id})
        res.status(200).send(`Deletando um id ${req.params.usuario_id}`)
      } 
      catch (err) 
      {
        res.status(401).send(`Erro: ${err}`)
      }
    }
    else
    {
      res.status(401).send(`Acesso negado, token inválido`)
    }
  }
}
module.exports = UsuarioController;