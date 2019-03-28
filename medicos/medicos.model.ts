import * as mongoose from 'mongoose'

export interface Medico extends mongoose.Document {
    nome: string,
    celular: string,
    crm: string,
    email: string,
    dataNascimento: Date
}

const medicoSchema = new mongoose.Schema({
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
    crm: {
        type: String
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

export const Medico = mongoose.model<Medico>('Medico', medicoSchema)
