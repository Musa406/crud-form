import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/field.interface';
import { FormGroup } from '@angular/forms';
import { FormService } from 'src/app/_services/form.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  field: FieldConfig;
  group: FormGroup;
  options: any;
  optionsUrl:string;
  constructor(private dpHttp: FormService) {}
  
  ngOnInit() {
    this.extractDropdown();
  }
  extractDropdown() {
    this.optionsUrl = this.field.edit.optionSource;

    this.dpHttp.fetchOption(this.optionsUrl)
    .subscribe(
      (data)=>{
        this.options = data;
        console.log('test options');
        console.log(this.options);
      }
    );
  }

  
}
