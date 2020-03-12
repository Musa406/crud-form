import { Component, ViewChild, OnInit } from "@angular/core";
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
