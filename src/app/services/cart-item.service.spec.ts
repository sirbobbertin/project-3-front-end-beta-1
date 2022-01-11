import { TestBed } from '@angular/core/testing';

import { CartItemService } from './cart-item.service';

describe('CartItemService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule 
      ],
      declarations: [
        CartItemService
      ],
    }).compileComponents();
  }));
});
