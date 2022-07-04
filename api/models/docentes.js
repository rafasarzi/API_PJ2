'use strict'
module.exports = (sequelize, DataTypes) => {
  const Docentes = sequelize.define('Docentes', {
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
  Docentes.associate = function(models) {
    Docentes.hasMany(models.Turmas, {
      foreignKey: 'docente_id'
    })

  }
  return Docentes
}