import mongoose, { Schema, Document } from "mongoose";

export interface IPelicula extends Document{
    title:string;
    year:number;
    genres:string[];
};

const PeliculaSchema: Schema = new Schema({
    title :  {type:String} ,
    year  :  {type:Number} ,
    genres: [{type:String}],
},{
    collection: "movies"
});

export default mongoose.model<IPelicula>("Pelicula",PeliculaSchema)