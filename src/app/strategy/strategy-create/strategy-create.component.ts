import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-strategy-create',
  templateUrl: './strategy-create.component.html',
  styleUrls: ['./strategy-create.component.css']
})
export class StrategyCreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.formBuilder.group({
      name: [''],
      type: [''],
      ticker: [''],
      quantity: [''],
      slowAvgIntervale: [''],
      fastAvgIntervale: [''],
      limit: [''],
      stop: ['']
    });
  }

  onClickSubmit(email, password) {
    alert('Your Email is : ' + email);
  }

  ngOnInit() {}
}
