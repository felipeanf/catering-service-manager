import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { EventTypesService } from 'src/app/shared/services/event-types.service';
import { ProductsService } from 'src/app/shared/services/products.service';
import { QuotationService } from '../../services/quotation.service';
import { NewQuotationComponent } from './new-quotation.component';

describe('NewQuotationComponent', () => {
  let component: NewQuotationComponent;
  let fixture: ComponentFixture<NewQuotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [ NewQuotationComponent ],
      providers: [ 
        ProductsService, 
        EventTypesService,
        QuotationService,
        CustomerService
      ]
    })
    .compileComponents();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
