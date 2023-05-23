const reservas = require('../../datos/reservas.json') 

const getAllReservas =  (req, res)=> {
    res.json(reservas ).status(200) 
}

const getReservasByid = (req, res) => {
    const id = req.params.id
    const resultado = reservas.find (reserva=> reserva.id== id)
    if (resultado){
        res.status(200).json(resultado).status(200)
    } else {
        res.status(404).json({ mensaje: `La reserva con id ${id} no fue encontrado`} )
    }
}

const deleteReservasByid= (req, res) => {
    const id = req.params.id
    const indice = reservas.findIndex (reserva => reserva.id == id)
    if (indice==-1) {
       res.status(404).json
       ( {
          resultado :"La operacion de borrado no pudo ser ejecutada",
          mensaje: `La reserva con ese id ${id} no fue encontrado`
       } 
      )
    } else {
       const reserva = reservas[indice];
       const resultado = reservas.splice(indice,1)
       res.status(200).json( {resultado:"La operacion de borrado pudo realizarse con exito",
                 reserva: reserva})
    }
}

const postReservas = (req, res) =>{
    const reservasData = req.body
    const existe = reservas.find ( reserva => reserva.id == reservasData.id)
    if (!existe) {
        if (!reservasData.habilitado )
            reservasData.habilitado= false
        if (!reservasData.cliente) {
            res.status(400).json({mensaje: `No puedo generar la reserva con id ${reservasData.id} por no tener nombre`}) 
        } else {
             reservas.push(reservasData)
             res.status(201).json({mensaje: `La reserva con id ${reservasData.id} fue creada correctamente`}) 
        }
      } else {
        res.status(400).json({mensaje: `La reserva con id ${reservasData.id} ya existe en la base de datos`}) 
     }
 }

 const putReservas= (req, res) => {  
    const id = req.params.id 
    const reservasData = req.body
    const indice = reservas.findIndex ( reserva => reserva.id== id)
    if (indice >= 0 ){
        reservas[indice].cliente = reservasData.marca
        reservas[indice].habilitado= true
          (!reservasData.habilitado) ? reservasData.habilitado : reservas[indice].habilitado
        res.status(201).json({"reserva": reservas[indice]})
    }
    res.status(404).json
       ( {
          resultado :"La operacion de modificado no pudo ser realizada",
          mensaje: `La reserva con id ${id} no fue encontrado`
       } 
     )
 }
module.exports ={ 
    getAllReservas,
    getReservasByid,
    deleteReservasByid,
    postReservas,
    putReservas
}
    