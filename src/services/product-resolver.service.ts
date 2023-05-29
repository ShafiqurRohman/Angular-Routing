import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { productType } from 'src/app/models/product.type';
import { ProductService } from './product.service';


@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<productType>{

  resolve( route: ActivatedRouteSnapshot,state: RouterStateSnapshot
  ) : productType{
      const id = route.params['id'];

      return this.productService.getProductById(id);
  }

  constructor(
    private productService: ProductService
  ) { }
}
