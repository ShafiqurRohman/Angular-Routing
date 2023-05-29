import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.type';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

    product!: Product;
    id!:number;

    constructor(
      private productService: ProductService,
      private route: ActivatedRoute
    ){
     // this.id = this.route.snapshot.params['id'];
    }

    ngOnInit(): void {
      // data recieve by api call
      // this.productService.getProductById(this.id).subscribe(
      //   (data) => {
      //     console.log(data);  
      //   }
      // )

      this.product = this.route.snapshot.data['product'];//data receive by routing

    }
}
