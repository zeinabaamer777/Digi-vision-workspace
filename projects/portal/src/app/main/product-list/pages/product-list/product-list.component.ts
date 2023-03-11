import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../interfaces/product.interface';
import { ProductsService } from '../../services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productsList: IProduct[] = [];

  constructor(private productsService: ProductsService) {}
  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productsService.all().subscribe({
      next: (res: IProduct[]) => {
        this.productsList = res;
      },

      error: () => {},
    });
  }
}
