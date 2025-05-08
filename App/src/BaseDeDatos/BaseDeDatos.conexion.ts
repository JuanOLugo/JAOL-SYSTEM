import mongoose from "mongoose"

// Conexión a la base de datos
export const conexionDbPrincipal = async () => {
    if(!process.env.MONGO_URI ) throw new Error("No se ha definido la variable de entorno MONGO_URI")
    const MONGO_URI = process.env.MONGO_URI 
    try {
        await mongoose.connect(MONGO_URI)
        console.log("Base de datos conectada, consultar docker-compose.yml")
    } catch (error) {
        console.log(error)
    }
}

export const desconectarDbPrincipal = async () => {
    await mongoose.disconnect()
    console.log("Base de datos desconectada")
}