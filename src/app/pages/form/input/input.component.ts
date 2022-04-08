import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lr-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() name!: string;
  @Input() error!: string;
  @Input() lrForm!: FormGroup;

  constructor() {

    console.log(this.error);
  }

  ngOnInit(): void {
  }

}
