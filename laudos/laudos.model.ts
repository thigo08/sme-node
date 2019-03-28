import * as mongoose from 'mongoose'
import { User } from '../users/users.model';
import { Laboratorio } from '../laboratorios/laboratorios.model';
import { Paciente } from '../pacientes/pacientes.model';
import { Medico } from '../medicos/medicos.model';
import { ItemLaudo, itemSchema } from './itemLaudo.model';

export interface Laudo extends mongoose.Document {
    codigoExtra: string,
    usuario: mongoose.Types.ObjectId | User,
    laboratorio: mongoose.Types.ObjectId | Laboratorio,
    paciente: mongoose.Types.ObjectId | Paciente,
    medico: mongoose.Types.ObjectId | Medico,
    dataHoraEmissao: Date,
    dataHoraRecebido: Date,
    dataHoraResultado: Date,
    usuarioRecebeu: mongoose.Types.ObjectId | User,
    itemsLaudo: ItemLaudo[]
}

const laudoSchema = new mongoose.Schema({
    codigoExtra: {
        type: String,
        required: true
    },
    usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    laboratorio: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Laboratorio',
        required: true
    },
    paciente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Paciente',
        required: true
    },
    medico: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Medico',
        required: true
    },
    dataHoraEmissao: {
        type: Date
    },
    dataHoraRecebido: {
        type: Date
    },
    dataHoraResultado: {
        type: Date
    },
    usuarioRecebeu: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    itemsLaudo: {
        type: [itemSchema],
        required: false,
        select: false,
        default: []
    }
})

export const Laudo = mongoose.model<Laudo>('Laudo', laudoSchema)
