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
 
  @Input() modelClassName:string;
  fields:any;
  form: FormGroup;
  showJson = false;

  get value() {
    return this.form.value;
  }

  constructor(
    private fb: FormBuilder,
    private _service: FormService
    ){}

  ngOnInit() {
    this.getConfigs();
  }

  getConfigs() {
    this._service.fetchConfig(this.modelClassName)
    .subscribe(
      (data)=>{
        this.fields = data;
        this.form = this.createControl();
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
    console.log(this.form.value);
    this.showJson = true;
  }
}
