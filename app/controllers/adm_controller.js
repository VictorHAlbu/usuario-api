var Adm = require('../models/adm.js');

const AdmController = {

    index: (req, res, next) => {

        Adm.find().then(dado => res.send(dado));   

    //     const adm = new Adm({ nome: 'Suport', senha: '123456', email: 'suport@gmail.com' });
    //     adm.save(error => {
        
    //     if(error){
    //         res.send(error);
    //         return
    //     }

    //       Adm.find().then(dado => {
    //         res.send(dado);
    //     });   
    //  });
    },
    create: (req, res, next) => {   
        const adm = new Adm({ nome: res.body.nome, senha: res.body.senha, email: res.body.email });
        adm.save(error => {
        
        if(error){
            res.send(error, 401);
            return
        }
          res.send({}, 201);   
    
        });
    },
    change: (req, res, next) => {   
        Adm.find({_id: req.params.adm_id}).then(dado => {
            if(dado.length > 0){
                adm =  adm[0];
                adm.nome = res.body.nome
                adm.senha = res.body.senha
                adm.email = res.body.email
                adm.save(error => {
                    if(error){
                        res.send(error, 401);
                        return
                    }
                      res.send(adm, 200);   
                });
            }
        });   
    },
    delete: (req, res, next) => {   
        Adm.deleteMany({_id: req.params.adm_id}).then(data => {
            if(data.deletedCount === 0) {
                res.send(data, 401);
                return
            }
              res.send(adm, 200);
        });   
    }
    
}

module.exports = AdmController;