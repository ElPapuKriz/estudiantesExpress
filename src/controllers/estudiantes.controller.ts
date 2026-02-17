import { Request, Response } from "express";

import estudiantesData from "../data/estudiantes.data.json";
import { Estudiante } from "../types/estudiante.types"


const estudiantes: Estudiante[] = estudiantesData

export const getAllStudents = (req: Request, res: Response) => {

    res.json({
        success: true,
        total: estudiantes.length,
        data: estudiantes,
        autor: "Christopehr Pazo V1"
    })

}

export const getStudentById = (req: Request, res: Response) => {
    const id = +req.params.id;

    const estudianteFiltrado = estudiantes.find((estudiante) => estudiante.id === id);

    if (!estudianteFiltrado) {
        return res.status(404).json({
            sucess: false,
            msg: `Estudiante con Id ${id} no fue encontrado.`
        })
    }

    res.json({
        sucess:true,
        data:estudianteFiltrado
    })

}