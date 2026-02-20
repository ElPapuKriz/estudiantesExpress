import mongoose from "mongoose";

export const connectBd = async () =>{

    try {
        
        const conn = await mongoose.connect(process.env.DATABASE || "");
        /* console.log(`Conexion exitosa : ${conn.connection.host}`)
        console.log(`Base de datos    : ${conn.connection.name}`) */

    } catch (error) {
        console.error("Error : ",error)
        process.exit(1)
    }

}