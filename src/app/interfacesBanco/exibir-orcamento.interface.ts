import { Time } from '@angular/common';
import { IClientes } from './clientes';
import { IStatusOrcamento } from './statusOrcamento';
import { ITipoEvento } from './tipoEvento';

export interface IExibirOrcamento {
    id: number;
    tipoEvento: ITipoEvento;
    nomeCliente: string;
    nomeProduto: string;
    dataOrcamento: Date;
    idCliente: IClientes;
    dataEvento: Date;
    horarioEvento: Time;
    quantidadePessoas: number;
    enderecoEvento: string;
    taxaDeslocamento: number;
    valorDesconto: number;
    valorFinal: number;
    statusOrcamento: IStatusOrcamento;
    quantidade: number,
    precoProdutoOrcado: number,
    quantidadeEstoque: number
    unidadeMedida: string;
    }