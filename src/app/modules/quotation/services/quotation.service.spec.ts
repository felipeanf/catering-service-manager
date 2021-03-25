import { HttpClient } from '@angular/common/http';
import { inject, TestBed } from '@angular/core/testing';
import { QuotationService } from './quotation.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable, of } from 'rxjs';

describe('QuotationService', () => {
  let service: QuotationService;

  const mockQuotations = [
    {
      id: '1',
      tipoEvento: { tipoEvento: "evento 1" },
      dataOrcamento: {},
      idCliente: {},
      dataEvento: '',
      horarioEvento: '',
      quantidadePessoas: 20,
      enderecoEvento: "endereco",
      taxaDeslocamento: 20,
      valorDesconto: 10,
      valorFinal: 550,
      statusOrcamento: {
        statusOrcamento: 'iniciado'
      }
    },
    {
      id: '2',
      tipoEvento: { tipoEvento: "evento 2" },
      dataOrcamento: {},
      idCliente: {},
      dataEvento: '',
      horarioEvento: '',
      quantidadePessoas: 30,
      enderecoEvento: "endereco",
      taxaDeslocamento: 20,
      valorDesconto: 5,
      valorFinal: 120,
      statusOrcamento: {
        statusOrcamento: 'iniciado'
      },
    }
  ]

  let http = {
    get: jest.fn(() =>
      of(mockQuotations)
    )
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ QuotationService ]
    });
    service = new QuotationService(http as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all quotations', done => {
    service.getQuotations().subscribe((quotations) => {
      expect(quotations.length).toBe(2);
      done();
    });
  })

  it('should open specific quotation page', done => {
    let id = '1';
    service.getQuotationById(id).subscribe(() => {
      expect(http.get).toBeCalledWith('http://localhost:8000/quotation/' + id)
      done();
    });
  })

  it('should get the right id', done => {
    let id = '1';
    service.getQuotationById(id).subscribe((quotations) => {
      expect(quotations[0].id).toEqual(id);
      done();
    });
  })

});
