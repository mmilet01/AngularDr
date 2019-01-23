import { Component, OnInit, Input } from '@angular/core';
import { ProductInterface } from 'src/app/productInterface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-get-grade',
  templateUrl: './get-grade.component.html',
  styleUrls: ['./get-grade.component.css']
})
export class GetGradeComponent implements OnInit {

  @Input() product: ProductInterface;
  ocjene = [];
  ocjena = 0;
  
  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.nizOcjena();

    this.productService.grades.subscribe(
      data => {
        if(this.product.id === data)
        {
             this.nizOcjena();
        } else {
          
        }
      }
    )


  }

 getOcjena(){   
    return this.ocjena;
  }

  nizOcjena(){
    this.ocjene= [];
    this.product.ocjene.map((ocj)=>{
      this.ocjene.push(ocj);
    })
    this.ocjena = this.ocjene.reduce(function(a,b){
      return a+b;
    }, 0) / this.ocjene.length
    console.log(this.ocjena);
  }

}
