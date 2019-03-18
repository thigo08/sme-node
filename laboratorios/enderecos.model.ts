import * as mongoose from 'mongoose'

export interface Endereco extends mongoose.Document {
    cep: string,
    logradouro: string,
    numero: object,
    proximo: string,
    bairro: string
    cidade: string,
    estado: string
}