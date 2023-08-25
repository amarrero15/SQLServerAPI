const express = require('express');
const config= require('../config/config');
const cors =require( 'cors');
const db = require("../models");
const app=express();


const clientesRoutes = require('../routes/clientes.routes');

app.use(cors());
app.use(express.json());
app.set('port',config.port);

app.use(clientesRoutes);

/*SEQUELIZE STARTS*/
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.get('/', (req, res)=>{
    res.send('<h1>Tienda Reparacion API</h1>');

});
module.exports=app;