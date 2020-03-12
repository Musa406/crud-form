
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DateComponent } from './components/date/date.component';
import { ButtonComponent } from './components/button/button.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicFieldDirective } from './components/directive/dynamic-field.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormService } from './_services/form.service';
import { FormComponent } from './create-form/single-page-upsert.component';
import { RoutingModule } from './routing/routing.module';
import { OperationalPeriodsComponent } from './operational-periods/operational-periods.component';
import { CellTemplateComponent } from './cell-template/cell-template.component';
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SelectComponent,
    CheckboxComponent,
    DateComponent,
    ButtonComponent,
    RadioButtonComponent,
    DynamicFormComponent,
    DynamicFieldDirective,
    FormComponent,
    OperationalPeriodsComponent,
    CellTemplateComponent
  ],
  imports: [
    
    BrowserModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [    { provide: HTTP_INTERCEPTORS, useClass: FormService, multi: true }],
  bootstrap: [AppComponent],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    CheckboxComponent,
    RadioButtonComponent
  ]
})
export class AppModule { }
