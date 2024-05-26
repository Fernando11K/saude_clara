import { Exame } from "./Exame";

export interface Agenda {
    id: number,
    idExame: number,
    exame: Exame,
    local: string,
    dataAgendamento: string,
    notas: string,
    realizado: boolean
}

