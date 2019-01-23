import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductInterface } from '../../productInterface';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  ocjena = 0;

  product: ProductInterface;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.productsService.singleProduct(id).subscribe((product)=>this.product = product);
  }

  getOcjena(){
    this.ocjena = 0;
    this.product.ocjene.map((ocj) => this.ocjena += ocj);
    return (this.ocjena / this.product.ocjene.length);
  }
}
