import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/configs/field.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {

  field: FieldConfig;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
