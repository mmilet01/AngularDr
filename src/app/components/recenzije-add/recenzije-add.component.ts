import { Component, OnInit, Input } from '@angular/core';
import { ProductInterface } from '../../productInterface';
import {RecenzijaInterface} from '../../rezencijaInterface';

@Component({
  selector: 'app-recenzije-add',
  templateUrl: './recenzije-add.component.html',
  styleUrls: ['./recenzije-add.component.css']
})
export class RecenzijeAddComponent implements OnInit {

  @Input() product: ProductInterface;

  constructor() { }

  ngOnInit() {
  }

 


}
