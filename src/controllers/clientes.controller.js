
const db = require("../models");
const Clientes= db.cliente;
const sq = db.sequelize;
const Op = db.Sequelize.Op;
clientesCtrl={}
clientesCtrl.addCliente = async(req, res)=>{
  try {
    const cliente = {
      NombreCliente:req.body.customerName,
      DireccionCliente:req.body.customerAddress,
      CedulaCliente: req.body.DNI,
      EmailCliente: req.body.customerEmail,
    };

    Clientes.create(cliente)
    .then(data => {
      res.json({"CedulaCliente": data.CedulaCliente});
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the ."
      });
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }   
};

clientesCtrl.getClientes=async(req, res)=>{
    try {
        Clientes.findAll()
          .then(data => {
            res.json(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving ."
            });
          });
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};

/*
clientesCtrl.getUser=async(req, res)=>{
  const { id } = req.params;
  mysqlConnection.query('SELECT * FROM dbo.Cliente WHERE CedulaCliente= ?', id, (err, rows,fields)=>{
    if(!err){
      res.json(rows[0]);
    }else{
      console.log(err);
    }
  });
};*/
clientesCtrl.updateUser=async(req, res)=>{
  try {
    await Clientes.upsert({
        nombreCliente:req.body.customerName,
        DireccionCliente:req.body.customerAddress,
        CedulaCliente: req.body.DNI,
        emailCliente: req.body.email,
    })
    .then(([result, created]) => {
      res.json({"CedulaCliente":result.CedulaCliente});
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while updating ."
      });
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

clientesCtrl.deleteCliente=async(req, res)=>{
  try {
    const {id}=req.params;
    await Clientes.destroy({
        where: {CedulaCliente: id}
    })
    .then(([result, created]) => {
      res.json({"CedulaCliente":result.CedulaCliente});
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while updating ."
      });
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
module.exports= clientesCtrl;