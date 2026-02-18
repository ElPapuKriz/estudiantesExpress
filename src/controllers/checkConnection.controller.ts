import { Request, Response } from "express";
import mongoose from "mongoose";

export const getConnection = async (req: Request, res: Response) => {

    try {
        const connectionDb = mongoose.connection.readyState;

        const status = {
            server: "Ok",
            connection: connectionDb === 1 ? "Conectado" : "Desconectado",
            timestamp: new Date().toISOString,
        }

        res.json(status);
    } catch (error) {
        res.status(500).json({
            server:"Bad",
            connection: "Disconnect",
            error,
        })
    }

}

