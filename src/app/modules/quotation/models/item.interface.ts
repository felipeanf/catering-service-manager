import { IProdutos } from "src/app/InterfacesBanco/produtos";

export interface IItemProduto {
    product: IProdutos | null;
    quantity: number;
    price: number;
}