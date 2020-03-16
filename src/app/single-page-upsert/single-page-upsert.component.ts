import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { FormService } from '../_services/form.service';
import { FieldConfig } from '../configs/field.interface';
import { FormGroup } from '@angular/forms';
import { DynamicFormComponent } from '../dynamic-form-builder/dynamic-form';

@Component({
  selector: 'single-page-upsert',
  templateUrl: './single-page-upsert.component.html',
  styleUrls: ['./single-page-upsert.component.css']
})
export class SinglePageUpsertComponent implements OnInit, AfterViewInit {

  @Input() modelName: string = '';
  config_fields: FieldConfig[];

  // @ViewChild(DynamicFormComponent, null)dyForm: DynamicFormComponent;

  constructor( private _service: FormService) { }
 
  ngAfterViewInit() {
    console.log('check view child...');
    // console.log(this.dyForm);
  }

  ngOnInit() {
    this.getConfigs();
  }
  
  getConfigs() {
    this._service.fetchConfig(this.modelName)
    .subscribe(
      (data)=>{
        this.config_fields = data;
        console.log(this.config_fields);
      }
    );
  }
}
