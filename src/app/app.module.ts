
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './material/material.module';
import { InputComponent } from './components/input/input.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DateComponent } from './components/date/date.component';
import { ButtonComponent } from './components/button/button.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SinglePageUpsert } from './upsert/single-page-upsert';
import { DynamicFieldDirective } from './directive/dynamic-field.directive';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormService } from './_services/form.service';
import { RoutingModule } from './routing/routing.module';
import { OperationalPeriodsComponent } from './operational-periods/operational-periods.component';
import { CellTemplateComponent } from './cell-template/cell-template.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { PasswordComponent } from './components/password/password.component';
import { EditaleDropdownComponent } from './components/editable-dropdown/editable-dropdown.component';
import { ChecklistComponent } from './components/checklist/checklist.component';
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    DropdownComponent,
    CheckboxComponent,
    DateComponent,
    ButtonComponent,
    RadioButtonComponent,
    SinglePageUpsert,
    DynamicFieldDirective,
    OperationalPeriodsComponent,
    CellTemplateComponent,
    TextareaComponent,
    PasswordComponent,
    EditaleDropdownComponent,
    ChecklistComponent
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
    DropdownComponent,
    DateComponent,
    CheckboxComponent,
    RadioButtonComponent,
    PasswordComponent,
    TextareaComponent,
    ChecklistComponent
  ]
})
export class AppModule { }
