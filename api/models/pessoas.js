'use strict'
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    cpf: DataTypes.STRING,
    cep: DataTypes.STRING,
    rua: DataTypes.STRING,
    numero: DataTypes.STRING,
    bairro: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,

  }, {})
  Pessoas.associate = function(models) {
    Pessoas.hasMany(models.Matriculas, {
      foreignKey: 'estudante_id'
    })

  }
  return Pessoas
}