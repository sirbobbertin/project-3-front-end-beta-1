import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreProductComponent } from './store-product.component';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormsModule } from '@angular/forms';

describe('StoreProductComponent', () => {
  let component: StoreProductComponent;
  let fixture: ComponentFixture<StoreProductComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let productService: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule,FormsModule],
      declarations: [ StoreProductComponent ],
      providers: [ProductService,FormBuilder]
    })
    .compileComponents();
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    productService = TestBed.inject(ProductService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
