import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { productType } from 'src/app/models/product.type';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class AllProductResolverService implements Resolve<productType>{

  resolve( route: ActivatedRouteSnapshot,state: RouterStateSnapshot
  ) : productType{
      return this.productService.getAllProduct();
  }

  constructor(
    private productService: ProductService
  ) { }
}

