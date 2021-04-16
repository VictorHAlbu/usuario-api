var Adm = require('../models/adm.js');

const AdmController = {
    index: (req, res, next) => {
        Adm.find().then(dado =>{
        res.send(dado);
    });   
    }
}

module.exports = AdmController;