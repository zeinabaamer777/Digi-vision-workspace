import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IProduct } from '../../interfaces';
import { ProductsService } from '../../services/products.service';
import { AddProductComponent } from '../add-product/add-product.component';
import { DeleteProductComponent } from '../delete-product/delete-product.component';
import { EditProductComponent } from '../edit-product/edit-product.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  @ViewChild(MatSort)
  sort!: MatSort;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = [
    'id',
    'title',
    'category',
    'price',
    'Edit',
    'Delete',
  ];

  dataSource = new MatTableDataSource<IProduct>();

  constructor(
    public dialog: MatDialog,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.getProductList();
  }

  getProductList(): void {
    this.productsService.getProductList().subscribe({
      next: (result) => {
        this.dataSource = new MatTableDataSource(result);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },

      error: (error) => {
        console.log(error, 'error');
      },
    });
  }

  addProduct() {
    const dialogRef = this.dialog.open(AddProductComponent, {
      width: '500px',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (!res) return;
      const data = this.dataSource.data;
      data.push(res);
      this.dataSource.data = data;
    });
  }

  EditProduct(id: string) {
    const dialogRef = this.dialog.open(EditProductComponent, {
      width: '500px',
      data: {
        productId: id,
      },
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (!res) return;
      const data = this.dataSource.data;
      data.forEach((item, index) => {
        if (item.id == res.id) {
          data[index] = res;
        }
      });
      this.dataSource.data = data;
    });
  }

  deleteCountry(id: string) {
    const dialogRef = this.dialog.open(DeleteProductComponent, {
      width: '500px',
      data: {
        productId: id,
      },
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (!res) return;
      const data = this.dataSource.data;
      data.forEach((item, index) => {
        if (item.id == res.id) {
          data.splice(index, 1);
        }
      });
      this.dataSource.data = data;
    });
  }
}
