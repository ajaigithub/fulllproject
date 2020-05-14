' use strict';
module.exports = (sequelize, DataTypes) => {
  var Othercontrib = sequelize.define('Othercontrib', {
  
    name:{
      DataTypes:sequelize.STRING,


    },
    description:{DataTypes:sequelize.STRING

    },
    amount:{
DataTypes:sequelize.INTEGER
    },
    
    
  });


  return Othercontrib;
};