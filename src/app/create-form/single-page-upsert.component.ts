import { Component, OnInit, Input } from '@angular/core';
import { FieldConfig } from '../field.interface';
import { FormService } from '../_services/form.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-page-upsert',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() modelName:string;
  
  streamConfigs: FieldConfig[];

  constructor(private _service: FormService,
    private route: ActivatedRoute,
    private router: Router
    ){ 

  }

  ngOnInit(){
    this.extractModelName();
    this.getConfigs();
  }
  
  getConfigs() {
    this._service.fetchConfig(this.modelName)
    .subscribe(
      (data)=>{
        this.streamConfigs = data;
        console.log(this.streamConfigs);
      }
    );
  }

  extractModelName() {
    this.route.params.subscribe(
      (params) => {
        this.modelName = params.modelName;
        console.log('test url parameter: '+ this.modelName);
      }
    );
  }

}
