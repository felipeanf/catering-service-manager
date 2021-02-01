import { Time } from '@angular/common';
import { IClientes } from './clientes';
import { ITipoEvento } from './tipoEvento';
import { IStatusOrcamento } from './statusOrcamento';

export interface IOrcamentos {
    id: number;
    tipoEvento: ITipoEvento;
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
    }