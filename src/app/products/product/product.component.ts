import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    products : any;

    constructor(
      private productService : ProductService,
      private route : ActivatedRoute
    ){}

    ngOnInit() : void{
        // this.productService.getAllProduct().subscribe( (data)=> {
        //     this.products = data;
        //     console.log(data)
        // })

       // this.products = this.productService.getAllProduct(); // for async pipe practice

       this.products = this.route.snapshot.data['products']; // receive the data from router

    }
}
