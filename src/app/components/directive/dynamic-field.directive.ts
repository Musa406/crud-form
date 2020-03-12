import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnInit,
  ViewContainerRef
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
import { InputComponent } from "../input/input.component";
import { ButtonComponent } from "../button/button.component";
import { SelectComponent } from "../select/select.component";
import { DateComponent } from "../date/date.component";
import { CheckboxComponent } from "../checkbox/checkbox.component";
import { RadioButtonComponent } from '../radio-button/radio-button.component';

const componentMapper = {
  input: InputComponent,
  button: ButtonComponent,
  dropdown : SelectComponent,
  datepicker: DateComponent,
  checkbox: CheckboxComponent,
  radiobutton: RadioButtonComponent
};
@Directive({
  selector: "[dynamicField]"
})
export class DynamicFieldDirective implements OnInit {

  @Input() field: FieldConfig;
  @Input() group: FormGroup;

  componentRef: any;
  factory;
  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnInit() {
    if((this.field.edit.type==null) && (this.field.edit.cellTemplate==null)){
      this.field.edit.type = 'input';
    }

      this.factory = this.resolver.resolveComponentFactory(
        componentMapper[this.field.edit.type]
      );
  
      
    this.componentRef = this.container.createComponent(this.factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}





