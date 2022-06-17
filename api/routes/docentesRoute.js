const { Router } = require('express')
const DocenteController = require('../controllers/DocenteController')
 
const router = Router()
router
.get('/docentes/:id', DocenteController.pegaUmDocente)
.post('/docentes', DocenteController.criaDocente)
.put('/docentes/:id', DocenteController.atualizaDocente)
.delete('/docentes/:id', DocenteController.apagaDocente)
.get('/docentes', DocenteController.pegaTodosOsDocentes)
module.exports = router