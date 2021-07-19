import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regex, regexErrors, markFormGroupTouched } from '@app/shared/utils';

import { ControlItem } from '@app/models/frontend';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  form!: FormGroup;
  isInline!: boolean;
  regexErrors = regexErrors;

  items!: ControlItem[];

  constructor(private fb: FormBuilder) {
    this.isInline = true;
    this.items = [
      { label: 'Test1', value: 1},
      { label: 'Test2', value: 2},
      { label: 'Test3', value: 3},
      { label: 'Test4', value: 4},
      { label: 'Test5', value: 5}
    ]
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      input: [null, {
        updateOn: 'blur',
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(regex.number)
        ]
      }],
      password: [null, {
        updateOn: 'blur', validators: [
          Validators.required
        ]
      }],
      autocomplete: [null, {
        updateOn: 'blur', validators: [
          Validators.required
        ]
      }],
      select: [null, {
        updateOn: 'change', validators: [
            Validators.required
        ]
      }],
      checkboxes: [null, {
        updateOn: 'change', validators: [
            Validators.required
        ]
      }],
      radios: [null, {
        updateOn: 'change', validators: [
            Validators.required
        ]
      }],
      date: [null, {
        updateOn: 'change', validators: [
            Validators.required
        ]
      }],
      dateRange: [null, {
        updateOn: 'change', validators: [
            Validators.required
        ]
      }]
    });
  }

  onPatchValue(): void {
    this.form.patchValue(
      {
        input: '123',
        password: 'FacundoMarcos2022',
        autocomplete: 1,
        select: 2,
        checkboxes: [3],
        radios: 4,
        date: new Date().getTime(),
        dateRange: {
          from: new Date(2021,8,7).getTime(),
          to: new Date(2021,11,20).getTime(),
        }


    });
  }

  onSubmit(): void {
    console.log('Presiono boton submit');

    if(!this.form.valid){
      markFormGroupTouched(this.form);
    }
  }

  organizarElemento() {
    this.isInline = !this.isInline;
  }

  onToggleDisabled(): void {
     if(this.form.enabled){
       this.form.disable();
     }else{
       this.form.enable();
     }
  }
}
