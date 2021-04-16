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
    }
}

module.exports = AdmController;