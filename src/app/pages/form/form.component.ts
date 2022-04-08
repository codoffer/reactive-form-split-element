import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-lr-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class LRFormComponent implements OnInit {

  errors: any = {}
  isFormValidated: boolean = false

  lrForm = this._fb.group({
    name: ['', [Validators.required]],
  })

  constructor(private _fb: FormBuilder) {
    this.errors = {
      name: 'Please enter your name.'
    }
  }

  get f() {
    return this.lrForm.controls;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.lrForm.valid) {
      this.isFormValidated = false;
      console.log(this.lrForm.value)
    } else {
      this.isFormValidated = true;
    }

  }

}
