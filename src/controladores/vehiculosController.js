const vehiculos = require('../../datos/vehiculos.json') 

const getAllVehiculos =  (req, res)=> {
    res.json(vehiculos ).status(200) 
}

const getVehiculosBypatente= (req, res) => {
    const patente = req.params.patente
    const resultado = vehiculos.find (vehiculo=> vehiculo.patente= patente)
    if (resultado){
        res.status(200).json(resultado).status(200)
    } else {
        res.status(404).json({ mensaje: `EL vehiculo con patente ${id} no fue encontrado`} )
    }
}

const postVehiculos = (req, res) =>{
    const vehiculosData = req.body
    const existe = reservas.find ( vehiculo => vehiculo.patente == vehiculosData.patente)
    if (!existe) {
        if (!vehiculosData.tieneCurso )
            vehiculosData.tieneCurso = false
        if (!vehiculosData.nombre) {
            res.status(400).json({mensaje: `No puedo generar el vehiculo con patente ${vehiculoData.patente} por no tener nombre`}) 
        } else {
             reservas.push(vehiculosData)
             res.status(201).json({mensaje: `EL vehiculo con patente ${vehiculoData.patente} fue creada correctamente`}) 
        }
      } else {
        res.status(400).json({mensaje: `EL vehiculo con patente ${vehiculoData.patente} ya existe en la base de datos`}) 
     }
 }

 const putVehiculos= (req, res) => { 
    const patente = req.params.patente 
    const vehiculosData = req.body
    const indice = vehiculos.findIndex ( vehiculo => vehiculo.patente== patente)
    if (indice >= 0 ){
        vehiculos[indice].nombre = vehiculosData.nombre
        vehiculos[indice].tieneCurso = 
          (!vehiculosData.tieneCurso) ? vehiculosData.tieneCurso : vehiculos [indice].tieneCurso
        res.status(201).json({"vehiculo": vehiculos[indice]})
    }
    res.status(404).json
       ( {
          resultado :"La operacion de modificado no pudo ser realizada",
          mensaje: `El vehiculo con patente ${patente} no fue encontrado`
       } 
     )
 }
module.exports ={ 
    getAllVehiculos,
    getVehiculosBypatente,
    postVehiculos,
    putVehiculos
}
    