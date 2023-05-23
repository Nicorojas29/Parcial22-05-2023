const express = require('express')
const reservaControladores = require('../controladores/reserva.controller')

const reservaRuta = express.Router()


reservaRuta.get('/', reservaControladores.getAllReservas)
reservaRuta.get ('/:id', reservaControladores.getReservasByid)
reservaRuta.delete('/id', reservaControladores.deleteReservasByid)
reservaRuta.post( '/', reservaControladores.postReservas)
reservaRuta.put('/:id', reservaControladores.putReservas)


module.exports = {reservaRuta}