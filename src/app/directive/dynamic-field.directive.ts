import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnInit,
  ViewContainerRef
} from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../configs/field.interface";
import { InputComponent } from "../components/input/input.component";
import { ButtonComponent } from "../components/button/button.component";
import { DropdownComponent } from "../components/dropdown/dropdown.component";
import { DateComponent } from "../components/date/date.component";
import { CheckboxComponent } from "../components/checkbox/checkbox.component";
import { RadioButtonComponent } from '../components/radio-button/radio-button.component';
import { PasswordComponent } from '../components/password/password.component';
import { TextareaComponent } from '../components/textarea/textarea.component';

const componentMapper = {
  textbox: InputComponent,
  button: ButtonComponent,
  dropdown : DropdownComponent,
  datepicker: DateComponent,
  checkbox: CheckboxComponent,
  radiobutton: RadioButtonComponent,
  password: PasswordComponent,
  textarea: TextareaComponent


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
      this.field.edit.type = 'textbox';
    }

      this.factory = this.resolver.resolveComponentFactory(
        componentMapper[this.field.edit.type]
      );
  
      
    this.componentRef = this.container.createComponent(this.factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
  }
}





