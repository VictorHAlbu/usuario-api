const AdmController = {
    index: (req, res, next) => {
        res.send([{id: 1, name: 'Victor'}]);
    }

}

module.exports = AdmController;