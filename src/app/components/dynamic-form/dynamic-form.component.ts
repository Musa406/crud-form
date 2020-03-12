import {Component,Input,OnInit,Output} from "@angular/core";
import {
  FormGroup,
  FormBuilder
} from "@angular/forms";
import { FieldConfig} from "../../field.interface";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  exportAs: "dynamicForm",
  selector: "dynamic-form",
  templateUrl: './dynamic-form.component.html',
  styles: []
})
export class DynamicFormComponent implements OnInit {

  @Input() fields: FieldConfig[] = [];


  form: FormGroup;
  showJson = false;
  get value() {
    return this.form.value;
  }

  constructor(private fb: FormBuilder,
    private route:ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit() {
    console.log('field checking');
    console.log(this.fields);
    this.form = this.createControl();

  }

  onSubmit(event: Event) {
    console.log(this.form.value);
    this.showJson = true;
  }

  onCancelled(){
    this.router.navigate(['./operationalPeriods']);
  }

  createControl() {
    
    const group = this.fb.group({});

    this.fields.forEach(field => {
      const control = this.fb.control(
        ''
      );

      group.addControl(field.name, control);
      console.log(group.controls);
    });
    return group;
  }



}
