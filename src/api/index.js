const express = require('express')
const router = express.Router()
const veiculosRoutes = require('./veiculos')
const entradaeSaidaRoutes = require('./entradaeSaida')

router.get('/', function (req, res) {
  res.status(200).send('<h1 style="text-align: center">App Online!</h1>')
})

router.use('/veiculos', veiculosRoutes)
router.use('/entrada-saida', entradaeSaidaRoutes)

module.exports = router