import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/configs/field.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {

  field: FieldConfig;
  group: FormGroup;
  
  constructor() { }

  ngOnInit() {

  }
}
