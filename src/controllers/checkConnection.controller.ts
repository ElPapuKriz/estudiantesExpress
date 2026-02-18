import { Request,Response } from "express";
import mongoose from "mongoose";

export const getConnection = (req:Request,res:Response)=>{
    const connectionDb = mongoose.connection.readyState;

    const status = {
        server:"Ok",
        connection: connectionDb === 1?"Conectado":"Desconectado",
        timestamp: new Date().toISOString,
    }

    res.json(status);
}

