const vehiculos = require('../../datos/vehiculos.json') 

const getAllVehiculos =  (req, res)=> {
    res.json(vehiculos ).status(200) 
}

const getVehiculosBypatente= (req, res) => {
    const patente = req.params.patente
    const resultado = vehiculos.find (vehiculo=> vehiculo.patente == patente)
    if (resultado){
        res.status(200).json(resultado).status(200)
    } else {
        res.status(404).json({ mensaje: `EL vehiculo con patente ${patente} no fue encontrado`} )
    }
}

const postVehiculos = (req, res) =>{
    const vehiculosData = req.body
    const existe = reservas.find ( vehiculo => vehiculo.patente == vehiculosData.patente)
    if (!existe) {
        if (!vehiculosData.habilitado)
            vehiculosData.habilitado = false
        if (!vehiculosData.marca) {
            res.status(400).json({mensaje: `No puedo generar el vehiculo con patente ${vehiculosData.patente} por no tener nombre`}) 
        } else {
             reservas.push(vehiculosData)
             res.status(201).json({mensaje: `EL vehiculo con patente ${vehiculosData.patente} fue creada correctamente`}) 
        }
      } else {
        res.status(400).json({mensaje: `EL vehiculo con patente ${vehiculosData.patente} ya existe en la base de datos`}) 
     }
 }

 const putVehiculos = (req, res)=>{
    const patente = req.params.patente  
    const vehiculosData = req.body 
    const indice = vehiculos.findIndex(vehiculo => vehiculo.patente == patente)
    if ( indice >= 0 ) {
        vehiculos[indice].marca = vehiculosData.marca
        if (vehiculosData.habilitado!==undefined) {
            vehiculos[indice].habilitado = vehiculosData.Habilitado 
        }
        res.status(201).json({"vehiculo": vehiculos[indice]})
    }
    else {
        res.status(404).
        json(
            {
                resultado: "La operación de modicar no pudo ser realizada",
                mensaje: `El vehiculo con ese patente ${patente} no fue encontrado`
            }
        )
    }
}

module.exports ={ 
    getAllVehiculos,
    getVehiculosBypatente,
    postVehiculos,
    putVehiculos
}
    