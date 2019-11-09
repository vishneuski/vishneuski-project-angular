import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-wine-view',
  templateUrl: './add-wine-view.component.html',
  styleUrls: ['./add-wine-view.component.css']
})
export class AddWineViewComponent implements OnInit {

  addWineForm: FormGroup;

  @Input()
  loggedInUser;

  @Output()
  addWine: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    this.addWineForm = new FormGroup(
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

  onSubmit(wine): void {
    this.addWine.emit(wine.value);
  }
}
