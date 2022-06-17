const database = require('../models')

class DocenteController {
  static async pegaTodosOsDocentes(req, res){
    try {
      const todosOsDocentes = await database.Docentes.findAll()
      return res.status(200).json(todosOsDocentes)  
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async pegaUmDocente(req, res) {
    const { id } = req.params
    try {
      const umDocente = await database.Docentes.findOne( { 
        where: { 
          id: Number(id) 
        }
      })
      return res.status(200).json(umDocente)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async criaDocente(req, res) {
    const novoDocente = req.body
    try {
      const novoDocenteCriado = await database.Docentes.create(novoDocente)
      return res.status(200).json(novoDocenteCriado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaDocente(req, res) {
    const { id } = req.params
    const novasInfos = req.body
    try {
      await database.Docentes.update(novasInfos, { where: { id: Number(id) }})
      const docenteAtualizado = await database.Docentes.findOne( { where: { id: Number(id) }})
      return res.status(200).json(docenteAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async apagaDocente(req, res) {
    const { id } = req.params
    try {
      await database.Docentes.destroy({ where: { id: Number(id) }})
      return res.status(200).json({ mensagem: `id ${id} deletado` })

    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

}

module.exports = DocenteController