import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from 'src/app/services/auth.service';
import { CartAndItemsService } from 'src/app/services/cart-and-items.service';
import { CartItemService } from 'src/app/services/cart-item.service';
import { ProductAndDiscountService } from 'src/app/services/product-and-discount.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

import { ProductPageComponent } from './product-page.component';

describe('ProductPageComponent', () => {
  let component: ProductPageComponent;
  let fixture: ComponentFixture<ProductPageComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let authService: AuthService;
  let productAndDiscountService: ProductAndDiscountService;
  let cartItemService: CartItemService;
  let cartAndItemsService: CartAndItemsService;
  let tokenStorageService: TokenStorageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule,HttpClientTestingModule],
      declarations: [ ProductPageComponent ],
      providers: [ProductAndDiscountService,CartItemService,CartAndItemsService
                    ,AuthService,TokenStorageService]
    })
      .compileComponents();
      httpClient = TestBed.inject(HttpClient);
      httpTestingController = TestBed.inject(HttpTestingController);
      authService = TestBed.inject(AuthService);
      productAndDiscountService = TestBed.inject(ProductAndDiscountService);
      cartItemService = TestBed.inject(CartItemService);
      cartAndItemsService = TestBed.inject(CartAndItemsService);
      tokenStorageService = TestBed.inject(TokenStorageService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title 'Initiating Testing'`, async(() => {
    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.title).toEqual('Initiating Testing');
  }));
});
