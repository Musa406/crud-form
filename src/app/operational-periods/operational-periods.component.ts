import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-operational-periods',
  templateUrl: './operational-periods.component.html',
  styleUrls: ['./operational-periods.component.css']
})
export class OperationalPeriodsComponent{

  modeClassName: string;
  createClicked = false;
  constructor(){}

  createForm(){
    this.createClicked = true;
  }
}
