import { IOrcamentos } from './IOrcamentos';
import { IProdutos } from './IProdutos';

export interface IProdutos_orcados {
    id_orcamento: IOrcamentos;
    id_produto: IProdutos;
    quantidade_produto: number;
    preco_produto_orcado: number;
    }