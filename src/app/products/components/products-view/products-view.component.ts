import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css']
})
export class ProductsViewComponent implements OnInit {

  @Input()
  products;

  constructor() { }

  ngOnInit() {
  }

}
