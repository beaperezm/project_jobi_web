import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartDetailComponent } from './cart-detail.component';
import { CartDetailRoutingModule } from './cart-detail-routing.module';


@NgModule({
  declarations: [
    CartDetailComponent
  ],
  imports: [
    CommonModule,
    CartDetailRoutingModule,
    RouterModule,
    SharedModule
  ]
})
export class CartDetailModule { }