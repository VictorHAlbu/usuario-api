 var mongoose = require('../../db/conexao'); 

const Usuario = mongoose.model('usuario', { 
  nome: { type: String, required: true },
  cpf: { type: Number, required: true, unique: true },
  telefone: { type: Number, required: true },
  endereco: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  banco: { type: String, required: true },
  nivel_investidor: { type: Number, required: true },
});

module.exports = Usuario;