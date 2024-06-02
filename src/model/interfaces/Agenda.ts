import EnumStatusAgendamento from "../types/EnumStatusAgenda";
import { Exame } from "./Exame";

export interface Agenda {
    id?: string,
    idSolicitante: string,
    idExame: number,
    exame: Exame,
    local: string,
    data: string,
    observacao: string,
    realizado: boolean,
    status?: EnumStatusAgendamento
}

