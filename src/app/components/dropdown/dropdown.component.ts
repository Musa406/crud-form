import { Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;

  field: FieldConfig;
  group: FormGroup;
  options:any;
  optionsUrl:string;

  // myControl = new FormControl();
  // 
  // meta: any;


  selectedOoptions = [];
  selectedOptionLabel: string;

  constructor(private dpHttp: FormService) {
  }

  ngOnInit() {
     this.extractDropdown();
     
  }

  onChange= ($event: any): void =>{
    console.log($event); 
  }
  onAdd = ($event: any): void =>{
    this.selectedOoptions.push($event);
    console.log($event); 
  }
  

  extractDropdown() {
    this.optionsUrl = this.field.edit.optionSource;

    this.dpHttp.fetchOption(this.optionsUrl)
    .subscribe(
      (data)=>{
        this.options = data;
        // this.searchOnInit();
      }
    );
  }
  
//   public formControl: FormControl;
  
  
//   public optionFilterCtrl: FormControl = new FormControl();
//   public filteredOptions: ReplaySubject<any> = new ReplaySubject<any>();

//   protected _onDestroy = new Subject<void>();


//   searchOnInit() {
//     this.formControl = this.group[this.field.name];
//     this.formControl.setValue(this.options[0]);

//     this.filteredOptions.next(this.options.slice());
    
//     this.optionFilterCtrl.valueChanges
//       .pipe(takeUntil(this._onDestroy))
//       .subscribe(() => {
//         this.filterOptions();
//       });
//   }

//   ngAfterViewInit() {
//     this.setInitialValue();
//   }

//   ngOnDestroy() {
//     this._onDestroy.next();
//     this._onDestroy.complete();
//   }

// protected setInitialValue() {
//     this.filteredOptions
//       .pipe(take(1), takeUntil(this._onDestroy))
//       .subscribe(() => {
//       });
// }

//   protected filterOptions() {
//     if (!this.options) {
//       return;
//     }
//     let search = this.optionFilterCtrl.value;
//     if (!search) {
//       this.filteredOptions.next(this.options.slice());
//       return;
//     } else {
//       search = search.toLowerCase();
//     }
//     this.filteredOptions.next(
//       this.options.filter(option => option.name.toLowerCase().indexOf(search) > -1)
//     );
//   }
 }
