import {Component,Input,OnInit} from "@angular/core";
import {
  FormGroup,
  FormBuilder
} from "@angular/forms";
import { FieldConfig} from "../configs/field.interface";


@Component({
  selector: "dynamic-form",
  templateUrl: './dynamic-form.html',
  styles: []
})
export class DynamicFormComponent implements OnInit {


  @Input() fields: FieldConfig[];
  crud_form: FormGroup;
  showJson = false;

  constructor(private fb: FormBuilder){}

  
  ngOnInit() {
    this.crud_form = this.createControl();
  }

  get value() {
    return this.crud_form.value;
  }


  createControl() {
    const group = this.fb.group({});
   console.log('test control:');

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
