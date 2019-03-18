import * as mongoose from 'mongoose'
import { Paciente } from '../pacientes/pacientes.model';
import { Medico } from '../medicos/medicos.model';
import { Laboratorio } from '../laboratorios/laboratorios.model';

export interface Laudo extends mongoose.Document {
    codigoExtra: string,
    usuario: object,
    laboratorio: Laboratorio,
    paciente: Paciente,
    medico: Medico,
    dataHoraEmissao: Date,
    dataHoraRecebido: Date,
    dataHoraResultado: Date,
    usuarioRecebeu: object,
    itemsLaudo: Array<object>
}

const laudoSchema = new mongoose.Schema({
    codigoExtra: {
        type: String
    },
    usuario: {
        type: Object
    },
    laboratorio: {
        type: Object
    },
    paciente: {
        type: Object
    },
    medico: {
        type: Object
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
        type: Object
    },
    itemsLaudo: {
        type: Array
    }
})

export const Laudo = mongoose.model<Laudo>('Laudo', laudoSchema)
