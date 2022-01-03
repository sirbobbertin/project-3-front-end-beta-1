import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartAndItems, CartItem } from 'src/app/models/cart.model';
import { ProductAndDiscount } from 'src/app/models/product.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { CartAndItemsService } from 'src/app/services/cart-and-items.service';
import { CartItemService } from 'src/app/services/cart-item.service';
import { ProductAndDiscountService } from 'src/app/services/product-and-discount.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  productAndDiscount: ProductAndDiscount = new ProductAndDiscount();
  user: User = new User();
  cartAndItems: CartAndItems = new CartAndItems();
  item: CartItem = new CartItem();
  productId: number = 0;

  constructor(private productAndDiscountService: ProductAndDiscountService, 
    private cartItemService: CartItemService,
    private cartAndItemsService: CartAndItemsService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // let pId: string = this.activatedRoute.snapshot.paramMap.get("productId") == null ? "" :  this.activatedRoute.snapshot.paramMap.get("productId");
    let param = this.activatedRoute.snapshot.paramMap.get("productId");
    if (param == null) this.productId = 0;
    else this.productId = parseInt(param);
    this.loadData();

  }

  loadData() {
    this.user = this.authService.retrieveUser();
    this.productAndDiscountService.getProductAndDiscountService(this.productId).subscribe({
      next: response => {
        this.productAndDiscount = response;
      },
      error: error => {
        console.log(error);
      }
    });

    this.cartAndItemsService.getCartAndItemsWithUserIdService(this.user.userId).subscribe({
      next: response => {
        this.cartAndItems = response;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  addToCart() {
    
    this.item.cartId = this.cartAndItems.cartId;
    // this.item.productId = ______;
    this.item.cartQty = 1;
    this.item.cartItemId = -1;
    this.cartItemService.addNewItemService(this.item);
  }



}

