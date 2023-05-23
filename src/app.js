const express = require ('express');
const app = express()   
const PORT = process.env.PORT || 3000;
const reservaRuta = require ('./rutas/reservaRuta')
const vehiculosRuta = require ('./rutas/vehiculosRuta')

app.use(express.json()) 
app.use('/api/reservas', reservaRuta)
app.use('/api/vehiculos', vehiculosRuta)

app.listen(PORT, () => {console.log(`App lista escuchada en el puerto ${PORT} `) }) 