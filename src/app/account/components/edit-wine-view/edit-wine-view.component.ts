import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../../../products/models/product.interface";
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages";

@Component({
  selector: 'app-edit-wine-view',
  templateUrl: './edit-wine-view.component.html',
  styleUrls: ['./edit-wine-view.component.css']
})
export class EditWineViewComponent implements OnInit {

  editWineForm: FormGroup;

  @Input()
  id: string;

  @Input()
  product: Product;

  @Output()
  editWine: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private router: Router,
    private flashMessageService: FlashMessagesService
  ) {
  }

  ngOnInit() {
    this.editWineForm = new FormGroup(
      {
        'email': new FormControl(null, Validators.required),
        'name': new FormControl(null, Validators.required),
        'price': new FormControl(null, Validators.required),
        'country': new FormControl(null, Validators.required),
        'vintage': new FormControl(null, Validators.required),
        'quantity': new FormControl(null, Validators.required),
        'photo': new FormControl(null, Validators.required),
      }
    );
  }

  onSubmit(form) {
    this.editWine.emit(form);
    this.router.navigate(['/account/listWine']);
    this.flashMessageService.show(`${form.value.name} was edited! `, {
      cssClass: 'alert-success', timeout: 3000
    });
  }
}
