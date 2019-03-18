import * as mongoose from 'mongoose'
import { Endereco } from './enderecos.model';

export interface Laboratorio extends mongoose.Document {
    nome: string,
    assinatura: string,
    endereco: Endereco,
    telefone: string,
    celular: string,
    email: string
}

const laboratorioSchema = new mongoose.Schema({
    nome: {
        type: String
    },
    assinatura: {
        type: String
    },
    endereco: {
        type: Object
    },
    telefone: {
        type: String
    },
    celular: {
        type: String
    },
    email: {
        type: String,
        unique: true
    }
})

export const Laboratorio = mongoose.model<Laboratorio>('Laboratorio', laboratorioSchema)
