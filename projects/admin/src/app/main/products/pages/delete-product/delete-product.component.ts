import { ToastService } from './../../../../../../../digi-shared-lib/src/lib/modules/core/services/toaster.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductsService } from '../../services/products.service';
import { ProductsListComponent } from '../products-list/products-list.component';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss'],
})
export class DeleteProductComponent implements OnInit {
  loading!: boolean;
  productId!: string;

  constructor(
    private productsService: ProductsService,
    public dialogRef: MatDialogRef<ProductsListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.productId = this.data.productId;
  }

  deleteCountry() {
    this.loading = true;
    this.productsService.deleteProduct(this.productId).subscribe({
      next: (res) => {
        this.loading = false;
        this.dialogRef.close(res);
        this.toastService.success('Product deleted successfully');
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
