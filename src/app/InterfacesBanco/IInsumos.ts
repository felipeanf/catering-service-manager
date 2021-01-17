import { IUnidade_medida } from './IUnidade_medida';
import { ICategoria_insumo } from './ICategoria_insumo';

export interface IInsumos {
    id_insumo: number;
    nome_insumo: string;
    nome_categoria_insumo: ICategoria_insumo;
    unidade_medida: IUnidade_medida;
    preco_compra_unitario: number;
    situacao_estoque: string;
    quantidade_estoque: number;
    }
    