import * as mongoose from 'mongoose'

export interface Endereco extends mongoose.Document {
    cep: string,
    logradouro: string,
    numero: string,
    proximo: string,
    bairro: string
    cidade: string,
    estado: string
}

export const enderecoSchema = new mongoose.Schema({
    cep: {
        type: String,
        required: true
    },
    logradouro: {
        type: String,
        required: true
    },
    numero: {
        type: String,
        required: true
    },
    proximo: {
        type: String,
        required: true
    },
    bairro: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    estado: {
        type: String
    }
})