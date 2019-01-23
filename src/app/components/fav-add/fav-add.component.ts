import { Component, OnInit, Input } from '@angular/core';
import { ProductInterface } from 'src/app/productInterface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-fav-add',
  templateUrl: './fav-add.component.html',
  styleUrls: ['./fav-add.component.css']
})
export class FavAddComponent implements OnInit {

  @Input() product: ProductInterface;
  favList: any[];
  

  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.productService.favorites.subscribe(items => this.favList = items)
  }
  

  clickedProduct() {
    this.product.favorite = !this.product.favorite;
    if(this.product.favorite){
      this.favList = this.favList.filter(item => item.id !== this.product.id);
      this.favList.push(this.product)
      this.productService.favorites.next(this.favList);
    }
    else{

      this.favList = this.favList.filter(item => item.id !== this.product.id);
      this.productService.favorites.next(this.favList);
    }
  }

}
