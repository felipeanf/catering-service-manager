import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { QuotationService } from '../../services/quotation.service';

import { EditQuotationComponent } from './edit-quotation.component';

describe('EditQuotationComponent', () => {
  let component: EditQuotationComponent;
  let fixture: ComponentFixture<EditQuotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditQuotationComponent ],
      providers: [ ActivatedRoute, QuotationService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
