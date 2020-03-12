import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/configs/field.interface';
import { FormGroup } from '@angular/forms';
import { FormService } from 'src/app/_services/form.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

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
      }
    );
  }

  
}
