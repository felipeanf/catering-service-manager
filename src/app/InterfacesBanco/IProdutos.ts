import { ICategoria_produto } from './ICategoria_produto';

export interface IProdutos {
    id_produto: number;
    nome_produto: string;
    nome_categoria_produto: ICategoria_produto;
    unidade_medida: string;
    preco_produto_unitario: number;
    quantidade_estoque: number;
    id_ficha_tecnica: any;
    }