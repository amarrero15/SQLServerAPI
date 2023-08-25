const router = require('express').Router();
const clientesCtrl= require('../controllers/clientes.controller');
router.post('/clientes', clientesCtrl.addCliente);
router.get('/clientes',  clientesCtrl.getClientes);
//router.get('/clientes/:id',  usersCtrl.getUser);
router.put('/clientes',  clientesCtrl.updateUser);
router.delete('/clientes/:id',  clientesCtrl.deleteCliente);

module.exports=router;