import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-filtration',
  templateUrl: './filtration.component.html',
  styleUrls: ['./filtration.component.css']
})
export class FiltrationComponent implements OnInit {

  filtrationForm: FormGroup;

  @Output()
  priceFilter: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    this.filtrationForm = new FormGroup({
      'lessHundred': new FormControl(null),
      'lessFiveHundred': new FormControl(null),
      'lessThouthand': new FormControl(null),
      'moreThouthand': new FormControl(null)
    })
  }

  onFilter(form) {
    console.log(form.value);
    this.priceFilter.emit(form);
  }

}
