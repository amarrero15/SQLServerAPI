module.exports = (sequelize, Sequelize) => {
    const users = sequelize.define("Cliente", {
      NombreCliente: {
        type: Sequelize.STRING,
      },
      DireccionCliente: {
        type: Sequelize.STRING
      },
      EmailCliente: {
        type: Sequelize.STRING,
      },
      CedulaCliente: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
    },
    {
      freezeTableName: true,
      timestamps: false 
    }
    );
  
    return users;
  };