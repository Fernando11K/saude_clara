export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface Exame {
  id: number;
  imagem: string;
  nome: string;
  resumo: string;
  descricao: string;
  principio: string;
  aplicacoes: string;
  preparacao: string;
  tempo_de_execucao: string;
}

export interface Agenda {
  id: number,
  idExame: number,
  exame: Exame,
  local: string,
  dataAgendamento: string,
  notas: string,
  realizado: boolean
}

