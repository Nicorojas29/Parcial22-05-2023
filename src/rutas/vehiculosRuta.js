const express = require('express')
const vehiculoControladores = require('../controladores/vehiculosController')

const vehiculoRuta = express.Router()


vehiculoRuta.get('/', vehiculoControladores.getAllVehiculos)   
vehiculoRuta.get ('/:patente', vehiculoControladores.getVehiculosBypatente)
vehiculoRuta.post( '/', vehiculoControladores.postVehiculos)
vehiculoRuta.put('/:patente', vehiculoControladores.putVehiculos)


module.exports = {vehiculoRuta}