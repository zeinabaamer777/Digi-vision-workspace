import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IProduct } from '../../interfaces/product.interface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId: string | null | undefined;
  details: IProduct = {} as IProduct;
  ratingArr: any[] = [];

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.productId = params.get('id');
      this.getOneItemDetails(this.productId);
    });
  }

  ngOnInit(): void {}

  getOneItemDetails(id: any) {
    this.productsService.one(id).subscribe({
      next: (response) => {
        this.details = response;

        if (this.details) this.getRaringAsArray(this.details.rating.rate);
      },
    });
  }

  getRaringAsArray(rating: number): any {
    this.ratingArr = this.productsService.getRatingAsArray(rating);
  }
}
