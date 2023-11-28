import { ItemFolhaPagamento } from "./item-folha-pagamento";
import { Totais } from "./totais";

export interface FolhaPagamento {
    itensFolhaPagamento: ItemFolhaPagamento[],
    totais: Totais
}
