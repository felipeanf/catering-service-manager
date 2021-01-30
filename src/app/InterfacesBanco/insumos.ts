import { IUnidadeMedida } from './unidadeMedida';
import { ICategoriaInsumo } from './categoriaInsumo';

export interface IInsumos {
    id: number;
    nome: string;
    categoria: ICategoriaInsumo;
    unidadeMedida: IUnidadeMedida;
    precoCompraUnitario: number;
    situacaoEstoque: string;
    quantidadeEstoque: number;
    }
    