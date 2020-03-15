import { Component, OnInit, Input } from '@angular/core';
import { FormService } from '../_services/form.service';
import { FieldConfig } from '../configs/field.interface';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'single-page-upsert',
  templateUrl: './single-page-upsert.component.html',
  styleUrls: ['./single-page-upsert.component.css']
})
export class SinglePageUpsertComponent implements OnInit {

  @Input() modelName: string = '';
  config_fields: FieldConfig[];


  constructor( private _service: FormService) { }

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
