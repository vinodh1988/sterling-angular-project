import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
theme:string="theme1"
color:string="black";
@Input('title') boxtitle:string="";
@Input() items:string[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  toggle(theme:string){
    this.theme=theme
  }

}
