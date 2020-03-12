import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/configs/field.interface';
import { FormGroup } from '@angular/forms';
import { FormService } from 'src/app/_services/form.service';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.css']
})
export class RadioButtonComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  options: any;
  
  constructor(private _service: FormService) {}
  ngOnInit() {
    this.extractRadioButton();
  }

  extractRadioButton() {
    this._service.fetchOption('')
    .subscribe(
      (data)=>{
        this.options = data;
        console.log(this.options);
      }
    );
  }
}