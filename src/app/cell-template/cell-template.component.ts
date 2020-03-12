import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cell-template',
  templateUrl: './cell-template.component.html',
  styleUrls: ['./cell-template.component.css']
})
export class CellTemplateComponent implements OnInit {
  @Input() cellTemplateName: any;
  constructor() { }

  ngOnInit() {

  }

}
