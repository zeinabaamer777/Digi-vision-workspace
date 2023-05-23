import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProduct } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input('product') product: IProduct = {} as IProduct;

  ratingArr: any[] = [];

  constructor(
    private router: Router,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    this.getRaringAsArray();
  }

  getRaringAsArray(): any {
    this.ratingArr = this.productService.getRatingAsArray(
      this.product.rating.rate
    );
  }

  goToDetails(id: any) {
    this.router.navigate([`product-details/${id}`]);
  }
}
