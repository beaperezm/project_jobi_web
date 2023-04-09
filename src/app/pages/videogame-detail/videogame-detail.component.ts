import { CartService } from './../../core/services/cart/cart.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/services/products/models/product.models';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-videogame-detail',
  templateUrl: './videogame-detail.component.html',
  styleUrls: ['./videogame-detail.component.scss']
})
export class VideogameDetailComponent {

  public product?: Product;
  myCart$ = this.cartService.myCart$;
  public products: Product[] = [];
  public total: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router,
    private cartService: CartService
  )  {
    
    this.activatedRoute.params.subscribe((params) => {
      const videogameId = params['id'];
      this.productsService.getProductsDetail(videogameId).subscribe((productsService) => {
        this.product = productsService;
      })
    });
    
  }

  public backToList(){
    this.router.navigate(['videogames'])
  }

  public addToCart(product: Product){
    return this.cartService.addProduct(product);
  }

}
