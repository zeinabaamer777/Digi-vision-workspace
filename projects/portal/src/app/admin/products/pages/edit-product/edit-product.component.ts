import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { IProduct } from '../../interfaces';
import { ProductsService } from '../../services/products.service';
import { ProductsListComponent } from '../products-list/products-list.component';
import { ToastService } from 'projects/portal/src/app/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  loading!: boolean;
  form!: FormGroup;
  productId!: string;
  uploadedFile: any;
  imageUrl: any;
  categoriesList: any;
  productDetails: any;

  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

  get formControls() {
    return this.form.controls;
  }

  constructor(
    private productsService: ProductsService,
    public dialogRef: MatDialogRef<ProductsListComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.productId = this.data.productId;
    this.getOneProduct(this.productId);
    this.initForm();
    this.getAllCategories();
  }

  getAllCategories() {
    this.productsService.getProductList().subscribe({
      next: (res) => {
        this.categoriesList = res;
      },
      error: (err) => {
        console.log(err, 'Error');
      },
    });
  }

  getOneProduct(id: string) {
    this.productsService.oneProduct(id).subscribe({
      next: (res: IProduct) => {
        this.productDetails = res;
        this.form.patchValue({
          id: res.id,
          title: res.title,
          price: res.price,
          description: res.description,
          category: res.category,
          image: res.image,
        });
      },

      error: (error) => {
        console.log(error, 'error');
      },
    });
  }

  initForm(): void {
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      image: new FormControl(null),
    });
  }

  onFileSelected(event: any) {
    this.uploadedFile = event.target.files.item(0);
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      this.form.patchValue({
        image: this.imageUrl,
      });
    };
    reader.readAsDataURL(this.uploadedFile);
  }

  updateProduct(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.loading = true;
      const payload = this.form.value;
      this.productsService.updateProduct(this.productId, payload).subscribe({
        next: (res) => {
          this.loading = false;
          this.dialogRef.close(res);
          this.toastService.success('Product updated successfully');
        },
        error: () => {
          this.loading = false;
        },
      });
    }
  }
}
