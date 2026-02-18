import mongoose, { Document, Schema } from "mongoose";

export interface IEstudiante extends Document {
    nombre: string;
    apellido: string;
    edad: number;
    carrera: string;
    email: string;
}

const EstudianteSchema: Schema = new Schema({
    nombre:{
        type:String,
        required:[true, "El nombre es requerido"],
        trim:true,
    },
    apellido:{
        type:String,
        required:[true, "El apellido es requerido"],
        trim:true,
    },
    edad:{
        type:String,
        required:[true, "La edad es requerido"],
        trim:true,
        min:[16,"La edad mínima es 16"],
        max:[100,"La edad maxima es 100"],
    },
    carrera:{
        type:String,
        required:[true, "El nombre de la carrera es requerido"],
        trim:true,
    },
    email:{
        type:String,
        required:[true, "El correo es requerido"],
        trim:true,
        unique:true,
    },
    
},{
    timestamps:true
})

export default mongoose.model<IEstudiante>("Estudiante",EstudianteSchema)