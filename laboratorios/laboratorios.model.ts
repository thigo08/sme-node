import * as mongoose from 'mongoose'
import { Endereco, enderecoSchema } from './enderecos.model';

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
        type: String,
        required: true,
        maxlength: 80,
        minlength: 3
    },
    assinatura: {
        type: String
    },
    endereco: {
        type: enderecoSchema
    },
    telefone: {
        type: String
    },
    celular: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        required: true
    }
})

export const Laboratorio = mongoose.model<Laboratorio>('Laboratorio', laboratorioSchema)
