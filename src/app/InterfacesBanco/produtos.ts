
import { ICategoriaProduto } from './categoriaProduto';
import { IFichaTecnica } from './fichaTecnica';
export interface IProdutos {
    id: number;
    nome: string;
    categoria: ICategoriaProduto;
    unidadeMedida: string;
    precoProdutoUnitario: number;
    quantidadeEstoque: number;
    idFichaTecnica: IFichaTecnica;
    }
