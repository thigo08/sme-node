import * as mongoose from 'mongoose'

export interface ItemLaudo extends mongoose.Document {
    exame: number,
    descricao: string
}