import { Component, OnInit } from '@angular/core';
import { FieldConfig } from 'src/app/configs/field.interface';
import { FormGroup, FormControl } from '@angular/forms';
import { FormService } from 'src/app/_services/form.service';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  field: FieldConfig;
  group: FormGroup;
  options:any;
  myControl = new FormControl();
  optionsUrl:string;
  optns:string[] = []
  constructor(private dpHttp: FormService) {
  }

  filteredOptions: Observable<any>;

  ngOnInit() {
     this.extractDropdown();
  }

  autoComplete() {
  
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map(value =>{
    //     this._filter(value);
    //   })
    // );
  }
  // private _filter(val:any): any{
  // const filterValue = val.label.toLowerCase;
   
  //  return this.options.filter(option =>
  //   option.toLowerCase().includes(filterValue)
  //   );
  // }

  extractDropdown() {
    this.optionsUrl = this.field.edit.optionSource;

    this.dpHttp.fetchOption(this.optionsUrl)
    .subscribe(
      (data)=>{
        this.options = data;
        console.log(this.optns);
        this.autoComplete();
      }
    );
  }
}
