import express from 'express';

import "dotenv/config"

import estudiantesRoutes from "./routes/estudiantes.routes"


const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());

app.use('/api/estudiantes',estudiantesRoutes);

app.get("/",(req,res)=>{
    

    res.json({
        msg: 'Api de estudiantes',
        endPoints:{
            'GET /api/estudiantes':"Obtener todos los estudiantes",
            'GET /api/estudiantes/:id':"Obtener estudiante por Id",
        }
    })
})

app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})