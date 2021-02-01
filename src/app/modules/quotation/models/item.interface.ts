import { IProdutos } from "src/app/interfacesBanco/produtos";

export interface IItemProduto {
    product: IProdutos | null;
    quantity: number;
    price: number;
}