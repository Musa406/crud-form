import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/configs/field.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  field: FieldConfig;
  group: FormGroup;
  
  constructor() { }

  ngOnInit() {
  }

}
