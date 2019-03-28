import * as mongoose from 'mongoose'

export interface Paciente extends mongoose.Document {
    nome: string,
    celular: string,
    email: string,
    dataNascimento: Date
}

const pacienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        maxlength: 80,
        minlength: 3
    },
    celular: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        required: true
    },
    dataNascimento: {
        type: Date,
        required: true
    }
})

export const Paciente = mongoose.model<Paciente>('Paciente', pacienteSchema)
