import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { ProductInterface } from '../../productInterface';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import {Ocjena} from '../../ocjenaInterface';
import { ProductsService } from 'src/app/services/products.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-ocjene',
  templateUrl: './ocjene.component.html',
  styleUrls: ['./ocjene.component.css']
})

export class OcjeneComponent implements OnInit {
  
  @Input() product: ProductInterface;
  
  ocjene: number[] = [];
  vasaOcjena: number;
  ocjenaRound: number;
  array: any[];


  constructor(
    private productService: ProductsService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.nizOcjena();
    this.getOcjena();
   }
   ngAfterViewChecked(){
    this.cdr.detectChanges();
   }

   getOcjena(){
     let array2 = []; 
    this.ocjenaRound = this.ocjene.reduce((acc,val) =>
       acc+val
    ,0 ) / this.ocjene.length
    
      const br = Math.round(this.ocjenaRound) ;
      let i: number;
      for(i=0;i<br;i++)
      {
        array2.push('ocjena');

      }
      this.array = array2;

       return this.ocjenaRound;
 
  }

  nizOcjena(){
    this.ocjene = [];
    this.product.ocjene.map((ocj)=>{
      this.ocjene.push(ocj);
    })
  }

  ocjenaPush(ocjena:number, product: ProductInterface){
   
    this.product.ocjene.push(ocjena);
 
    this.ocjene.push(ocjena);
    this.vasaOcjena = ocjena;

    this.productService.grades.next(this.product.id);
  } 
  
  /* getOcjena2(){
    let ukOcj=0;
    this.product.ocjene.map((ocjena)=> ukOcj+=ocjena.ocjena    
    )
    return ukOcj/this.product.ocjene.length
  } 


   ocjenaPush2(ocjena:number){
    const id = this.product.ocjene.length + 1;
   let ocjena2: Ocjena = {
    ocjena: ocjena,
    ocjena_id: id
  }
    this.product.ocjene.push(ocjena2);
    this.product.isDisabled = !this.product.isDisabled;
    this.vasaOcjena = ocjena;
}  */

 
}
