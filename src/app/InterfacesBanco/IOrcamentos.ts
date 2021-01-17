import { Time } from '@angular/common';
import { IClientes } from './IClientes';
import { ITipo_evento } from './ITipo_evento';
import { IStatus_orcamento } from './IStatus_orcamento';




export interface IOrcamentos {
    id_orcamento: number;
    tipo_evento: ITipo_evento;
    data_orcamento: Date;
    id_cliente: IClientes;
    data_evento: Date;
    horario_evento: Time;
    quantidade_pessoas: number;
    endereco_evento: string;
    taxa_deslocamento: number;
    valor_desconto: number;
    valor_final: number;
    status_orcamento: IStatus_orcamento;
    }