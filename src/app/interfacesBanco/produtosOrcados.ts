import { IOrcamentos } from './orcamentos';
import { IProdutos } from './produtos';

export interface IProdutosOrcados {
    id: IOrcamentos;
    idProduto: IProdutos;
    quantidadeProduto: number;
    precoProdutoOrcado: number;
    }