import express from 'express';

import "dotenv/config"

import estudiantesRoutes from "./routes/estudiantes.routes"

import { connectBd } from './config/database';


const app = express();
const PORT = process.env.PORT || 3000

connectBd();

app.use(express.json());

app.use('/api/estudiantes',estudiantesRoutes);


app.get("/",(req,res)=>{
    
    res.json({
        msg: 'Api de estudiantes',
        endPoints:{
            'GET /api/estudiantes':"Obtener todos los estudiantes",
            'GET /api/estudiantes/:id':"Obtener estudiante por Id",
            'POST /api/estudiantes':"Crear nuevo usuario",
        }
    })
})

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

export default app;