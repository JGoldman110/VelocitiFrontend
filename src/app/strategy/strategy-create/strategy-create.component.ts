import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StrategyService } from '../../service/strategy.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-strategy-create',
  templateUrl: './strategy-create.component.html',
  styleUrls: ['./strategy-create.component.css']
})
export class StrategyCreateComponent implements OnInit {
  showTMAFields: boolean = false;
  showBBFields: boolean = false;
  strategyForm: FormGroup;
  tickers: any;

  constructor(private formBuilder: FormBuilder,
              private strategyService: StrategyService,
              private router: Router) {
    this.createForm();
  }

  createForm() {
    this.strategyForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      ticker: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      limit: ['', [Validators.required]],
      stop: ['', [Validators.required]],
      slowAvgIntervale: [''],
      fastAvgIntervale: [''],
      timeSpan: [''],
      std: ['']
    });
  }

  onSubmit(values) {
    this.strategyService.createStrategy(values).subscribe(
      strategy => {
        console.log(strategy);
        this.router.navigate(['']);
        this.strategyForm.reset();
      },
      err => {
        console.log(err);
      }
    )
  }

  changeType(event) {
    this.strategyForm.get('type').setValue(event.target.value, {
     onlySelf: true
    })
    if (event.target.value == "TMAStrategy") {
      this.showBBFields = false;
      this.strategyForm.get('timeSpan').clearValidators();
      this.strategyForm.controls['timeSpan'].setValue('');
      this.strategyForm.get('timeSpan').updateValueAndValidity();
      this.strategyForm.get('std').clearValidators();
      this.strategyForm.controls['std'].setValue('');
      this.strategyForm.get('std').updateValueAndValidity();

      this.strategyForm.get('slowAvgIntervale').setValidators([Validators.required]);
      this.strategyForm.get('slowAvgIntervale').updateValueAndValidity();
      this.strategyForm.get('fastAvgIntervale').setValidators([Validators.required]);
      this.strategyForm.get('fastAvgIntervale').updateValueAndValidity();
      this.showTMAFields = true;
    }
    else if (event.target.value == "BBStrategy") {
      this.showTMAFields = false;
      this.strategyForm.get('slowAvgIntervale').clearValidators();
      this.strategyForm.controls['slowAvgIntervale'].setValue('');
      this.strategyForm.get('slowAvgIntervale').updateValueAndValidity();
      this.strategyForm.get('fastAvgIntervale').clearValidators();
      this.strategyForm.controls['fastAvgIntervale'].setValue('');
      this.strategyForm.get('fastAvgIntervale').updateValueAndValidity();

      this.strategyForm.get('timeSpan').setValidators([Validators.required]);
      this.strategyForm.get('timeSpan').updateValueAndValidity();
      this.strategyForm.get('std').setValidators([Validators.required]);
      this.strategyForm.get('std').updateValueAndValidity();
      this.showBBFields = true;
    }
    else {
      this.showBBFields = false;
      this.showTMAFields = false;
      this.strategyForm.get('timeSpan').clearValidators();
      this.strategyForm.controls['timeSpan'].setValue('');
      this.strategyForm.get('timeSpan').updateValueAndValidity();
      this.strategyForm.get('std').clearValidators();
      this.strategyForm.controls['std'].setValue('');
      this.strategyForm.get('std').updateValueAndValidity();
      this.strategyForm.get('slowAvgIntervale').clearValidators();
      this.strategyForm.controls['slowAvgIntervale'].setValue('');
      this.strategyForm.get('slowAvgIntervale').updateValueAndValidity();
      this.strategyForm.get('fastAvgIntervale').clearValidators();
      this.strategyForm.controls['fastAvgIntervale'].setValue('');
      this.strategyForm.get('fastAvgIntervale').updateValueAndValidity();
    }
  }

  ngOnInit() {
    return this.strategyService.getTickers().subscribe((data: {}) => {
      this.tickers = data;
    })
  }
}
