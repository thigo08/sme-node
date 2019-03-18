import * as mongoose from 'mongoose'

export interface Paciente extends mongoose.Document {
    name: string,
    celular: string,
    email: string,
    dataNascimento: Date
}

const pacienteSchema = new mongoose.Schema({
    name: {
        type: String
    },
    celular: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    dataNascimento: {
        type: Date
    }
})

export const Paciente = mongoose.model<Paciente>('Paciente', pacienteSchema)
