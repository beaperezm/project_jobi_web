import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationPipe } from './pipes/pagination/pagination.pipe';
import { SearchPipe } from './pipes/search/search.pipe';
import { SortPipe } from './pipes/sort/sort.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SortComponent } from './components/sort/sort.component';
import { ProductDiscountedListComponent } from './components/product-discounted-list/product-discounted-list.component';
import { ProductDiscountedDetailComponent } from './components/product-discounted-detail/product-discounted-detail.component';




@NgModule({
  declarations: [
    PaginationPipe,
    SearchPipe,
    SortPipe,
    FilterPipe,
    ProductListComponent,
    ProductDetailComponent,
    SortComponent,
    ProductDiscountedListComponent,
    ProductDiscountedDetailComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    RouterModule
  ],
  exports: [
    ProductListComponent,
    ProductDetailComponent,
    ProductDiscountedListComponent,
    ProductDiscountedDetailComponent,
    SortPipe,
    SortComponent,
    SearchPipe
  ]
})
export class SharedModule { }
