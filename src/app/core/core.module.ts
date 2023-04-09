import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from './components/loading/loading.component';
import { RouterLink, RouterModule } from '@angular/router';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { CartModule } from '../pages/cart/cart.module';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoadingComponent,
    ScrollToTopComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    SharedModule,
    CartModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    ScrollToTopComponent
  ]
})
export class CoreModule { }
