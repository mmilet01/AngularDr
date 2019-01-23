import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ProductInterface } from '../../productInterface';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

 products : ProductInterface [];
 
  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.productService.favorites.subscribe(data=>
      {
              this.products = data;
      }
    );


 }

}
