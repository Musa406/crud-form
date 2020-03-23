import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { FieldConfig } from 'src/app/configs/field.interface';
import { FormGroup, FormControl } from '@angular/forms';
import { FormService } from 'src/app/_services/form.service';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import {map, startWith, takeUntil, take} from 'rxjs/operators';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  field: FieldConfig;
  group: FormGroup;
  dropdownOptions:any;
  optionsSource:string;
  selectedOption:any;

  constructor(private dpHttp: FormService) {
  }

  // ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    
  //   const dpControl = this.group.get(this.field.label);
  //   dpControl.setValue(this.selectedOption);

  //   this.group.controls[this.field.label].valueChanges.subscribe(
  //     (selectedValue) => {
  //       console.log(selectedValue);
  //       console.log(this.group.value.question1);     
  //     }
  // );
    
  // }

  ngOnInit() {
     this.extractDropdown();

  }
 
  // selectedOption = this.dropdownOptions[0].label;

  extractDropdown() {
    this.optionsSource = this.field.edit.optionSource;
  
    this.dpHttp.fetchOption(this.optionsSource)
    .subscribe(
      (data)=>{
        this.dropdownOptions = data;
        // this.celectedOption = this.dropdownOptions[0].value;
        console.log();
      }
    );
  }
 }
