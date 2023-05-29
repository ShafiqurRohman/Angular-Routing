import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ProductResolverService } from 'src/services/product-resolver.service';
import { AllProductResolverService } from 'src/services/all-product-resolver.service';

const router : Routes = [
  {
    path:'', 
    resolve:{
      products:AllProductResolverService
    },
    component: ProductComponent
  },
  {
    path:'detail/:id',
    resolve:{
      product:ProductResolverService
    },
    component:ProductDetailsComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class ProductModule { }
