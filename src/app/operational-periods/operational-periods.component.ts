import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-operational-periods',
  templateUrl: './operational-periods.component.html',
  styleUrls: ['./operational-periods.component.css']
})
export class OperationalPeriodsComponent{

  modelName: string;
  createClicked = false;
  constructor(private activatedRoute: ActivatedRoute, private router: Router){

  }

  createForm(){
    this.createClicked = true;
    this.router.navigate(['./create', this.modelName],{ relativeTo: this.activatedRoute});
  }
}
