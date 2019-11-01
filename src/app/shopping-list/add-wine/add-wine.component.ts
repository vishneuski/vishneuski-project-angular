import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductsService} from "../../products/services/products.service";

@Component({
  selector: 'app-add-wine',
  templateUrl: './add-wine.component.html',
  styleUrls: ['./add-wine.component.css']
})
export class AddWineComponent implements OnInit {

  addWineForm: FormGroup;

  constructor(
    private productService: ProductsService) {}

  ngOnInit() {
    this.addWineForm = new FormGroup(
      {
        'name': new FormControl(null, Validators.required),
        'price': new FormControl(null, Validators.required),
        'country': new FormControl(null, Validators.required),
        'vintage': new FormControl(null, Validators.required),
        'quantity': new FormControl(null, Validators.required),
        'photo': new FormControl(null, Validators.required),
      }
    )
  }

  onSubmit(wine): void {
    // console.log(this.addWineForm.value);
    this.productService.addWine(wine.value);

  }
}
