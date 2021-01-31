import { IInsumos } from './insumos';
import { IProdutos } from './produtos';

export interface IFichaTecnica {
    idProdutos: IProdutos;
    idInsumo: IInsumos;
    quantidadeInsumo: number;
    }
    