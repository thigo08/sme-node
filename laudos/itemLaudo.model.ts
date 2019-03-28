import * as mongoose from 'mongoose'

export interface ItemLaudo extends mongoose.Document {
    exame: number,
    descricao: string
}

export const itemSchema = new mongoose.Schema({
    exame: {
        type: Number,
        required: true
    },
    descricao: {
        type: String,
        required: true,
        maxlength: 80
    }
})