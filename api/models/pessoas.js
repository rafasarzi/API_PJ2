'use strict'
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
    rua: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    cidade: DataTypes.STRING,
    celular: DataTypes.STRING,
  }, {})
  Pessoas.associate = function(models) {
    Pessoas.hasMany(models.Matriculas, {
      foreignKey: 'estudante_id'
    })

  }
  return Pessoas
}