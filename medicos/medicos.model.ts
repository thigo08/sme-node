import * as mongoose from 'mongoose'

export interface Medico extends mongoose.Document {
    name: string,
    celular: string,
    crm: string,
    email: string,
    dataNascimento: Date
}

const medicoSchema = new mongoose.Schema({
    name: {
        type: String
    },
    celular: {
        type: String
    },
    crm: {
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

export const Medico = mongoose.model<Medico>('Medico', medicoSchema)
