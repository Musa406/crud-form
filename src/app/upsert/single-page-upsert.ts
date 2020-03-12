import {Component,Input,OnInit,Output} from "@angular/core";
import {
  FormGroup,
  FormBuilder
} from "@angular/forms";
import { FieldConfig} from "../configs/field.interface";
import { FormService } from '../_services/form.service';

@Component({
  exportAs: "single-page-upsert",
  selector: "single-page-upsert",
  templateUrl: './single-page-upsert.html',
  styles: []
})
export class SinglePageUpsert implements OnInit {
 
  @Input() modelName:string;
  fields:any;
  crud_form: FormGroup;
  showJson = false;

  get value() {
    return this.crud_form.value;
  }

  constructor(
    private fb: FormBuilder,
    private _service: FormService
    ){}

  ngOnInit() {
    this.getConfigs();
  }

  getConfigs() {
    this._service.fetchConfig(this.modelName)
    .subscribe(
      (data)=>{
        this.fields = data;
        this.crud_form = this.createControl();
      }
    );
  }
  createControl() {
    const group = this.fb.group({});
   
    this.fields.forEach(field => {
      const control = this.fb.control(
        ''
      );

      group.addControl(field.name, control);
    });
    return group;
  }

  onSubmit(event: Event) {
    console.log(this.crud_form.value);
    this.showJson = true;
  }
}
