import { Request,Response } from "express";
import Pelicula from "../models/pelicula.models"

export const getMoviesAll = async(req:Request,res:Response)=>{
    try {
        const peliculas = await Pelicula.find()
        .select('title year genres -_id')
        .limit(5)

        res.json({
            success:true,
            data:peliculas,
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            data:"Hubo un error"
        })
    }
}