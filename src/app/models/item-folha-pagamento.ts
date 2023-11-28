export interface ItemFolhaPagamento {
    id: number;
    descricao: string;
    referencia: string;
    tipoItem: 'proventos' | 'descontos';
    valor: number;
}
