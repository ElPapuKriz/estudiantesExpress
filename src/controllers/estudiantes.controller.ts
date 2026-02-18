import { Request, Response } from "express";

import Estudiante from "../models/estudiante.models"


/* const estudiantes: Estudiante[] = estudiantesData */

export const getAllStudents = async (req: Request, res: Response) => {

    const estudiantesObtenidos = await Estudiante.find()

    try {
        res.json({
            success: true,
            total: estudiantesObtenidos.length,
            data: estudiantesObtenidos,
            autor: "Christopehr Pazo V1",

        })
    } catch (error) {
        res.json({
            success: false,
            msg: "Hubo un error",
            error:error instanceof Error ? error.message:"Error desconocido",
            autor: "Christopehr Pazo V1",

        })
    }


}

export const getStudentById = async (req: Request, res: Response) => {

    try {
        const { id } = req.params
        const estudianteFiltrado = await Estudiante.findById(id)

        if (!estudianteFiltrado) {
            return res.status(404).json({
                sucess: false,
                msg: `Estudiante con Id ${id} no fue encontrado.`
            })
        }

        res.json({
            sucess: true,
            data: estudianteFiltrado
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error,
        })
    }



}

export const setStudent = async (req: Request, res: Response) => {
    try {
        const { nombre, apellido, edad, carrera, email } = req.body;

        const nuevoEstudiante = new Estudiante({
            nombre,
            apellido,
            edad,
            carrera,
            email,
        });

        const estudianteGuardado = await nuevoEstudiante.save();

        res.status(200).json({
            success: true,
            msg: "Estudiante creado con éxito.",
            data: estudianteGuardado,
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            msg: "Hubo un error al crear el estudiante.",
            error,
        })
    }

}