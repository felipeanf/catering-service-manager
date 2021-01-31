import { TestBed } from '@angular/core/testing';
import { ProductsService } from './products.service';
import { CustomerService } from './costumer.service';



describe('DataService', () => {
  let serviceprodcut: ProductsService;
  let servicecustomer: CustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    serviceprodcut = TestBed.inject(ProductsService);
    servicecustomer = TestBed.inject(CustomerService);
  });
   
  it('should be created', () => {
    expect(serviceprodcut).toBeTruthy();
    expect(servicecustomer).toBeTruthy();
  });
});



