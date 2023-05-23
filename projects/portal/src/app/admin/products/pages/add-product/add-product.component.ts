import { ToastService } from './../../../../../../../digi-shared-lib/src/lib/modules/core/services/toaster.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductsService } from '../../services/products.service';
import { ProductsListComponent } from '../products-list/products-list.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  loading!: boolean;
  form!: FormGroup;
  categoriesList: any[] = [];
  fileToUpload: any;
  imageUrl: any;

  constructor(
    private productsService: ProductsService,
    public dialogRef: MatDialogRef<ProductsListComponent>,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getAllCategories();
  }

  getAllCategories() {
    this.productsService.allCategories().subscribe({
      next: (res: any) => {
        this.categoriesList = res;
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

  get formControls() {
    return this.form.controls;
  }

  onFileSelected(event: any) {
    this.fileToUpload = event.target.files.item(0);
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
      this.form.patchValue({
        image: this.imageUrl,
      });
    };
    reader.readAsDataURL(this.fileToUpload);
  }

  addProduct() {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      this.loading = true;
      const payload = this.form.value;
      this.productsService.addProduct(payload).subscribe({
        next: (res) => {
          this.loading = false;
          this.dialogRef.close(res);
          this.toastService.success('Product added successfully!');
        },
        error: () => {
          this.loading = false;
          this.toastService.error('Something went wrong');
        },
      });
    }
  }
}
