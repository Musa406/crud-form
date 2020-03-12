import { Component, ViewChild, OnInit } from "@angular/core";
// import { FieldConfig } from "./field.interface";
// import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { FormService } from "./_services/form.service";
import { FieldConfig } from './field.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent{ 

  submit(value: any) {
    alert('Eitar kaj ekhono hoi nai mama');
  }
}
