import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-filtration',
  templateUrl: './filtration.component.html',
  styleUrls: ['./filtration.component.css']
})
export class FiltrationComponent implements OnInit {

  filtrationForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.filtrationForm = new FormGroup({
      'lessHundred': new FormControl(null, Validators.required),
      'lessFiveHundred': new FormControl(null, Validators.required),
      'lessThouthand': new FormControl(null, Validators.required),
      'moreThouthand': new FormControl(null, Validators.required)
    })
  }

}
