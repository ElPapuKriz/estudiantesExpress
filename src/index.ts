import express from 'express';

import "dotenv/config"

import estudiantesRoutes from "./routes/estudiantes.routes"
import peliculasRoutes from "./routes/peliculas.routes"
import con from "./routes/checkConnection.route"
import { connectBd } from './config/database';


const app = express();
const PORT = process.env.PORT || 3000

connectBd();

app.use(express.json());

app.use('/api/estudiantes',estudiantesRoutes);
app.use("/api/peliculas",peliculasRoutes)
app.use("/con",con)

app.get("/",(req,res)=>{
    
    res.json({
        msg: 'Api de estudiantes',
        endPoints:{
            'GET /api/estudiantes':"Obtener todos los estudiantes",
            'GET /api/estudiantes/:id':"Obtener estudiante por Id",
            'GET /api/peliculas':"Obtener todas las peliculas",

        }
    })
})

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

export default app;