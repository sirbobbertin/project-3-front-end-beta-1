import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CartAndItemsService } from './cart-and-items.service';

describe('CartAndItemsService', () => {
  let service: CartAndItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,RouterTestingModule]
    });
    service = TestBed.inject(CartAndItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
