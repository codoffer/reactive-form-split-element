import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-lr-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class LRFormComponent implements OnInit {

  lrForm = this._fb.group({
    name: ''
  })

  constructor(private _fb: FormBuilder) {
  }

  get f() {
    return this.lrForm.controls;
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.lrForm.valid) {
      console.log(this.lrForm.value)
    }

  }

}
