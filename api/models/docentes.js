'use strict'
module.exports = (sequelize, DataTypes) => {
  const Docentes = sequelize.define('Docentes', {
    nome: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
    cpf: DataTypes.STRING,
    rua: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    cidade: DataTypes.STRING,
    celular: DataTypes.STRING,
  }, {})
  Docentes.associate = function(models) {
    Docentes.hasMany(models.Turmas, {
      foreignKey: 'docente_id'
    })

  }
  return Docentes
}