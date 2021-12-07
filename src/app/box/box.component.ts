import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
theme:string="theme1"

  constructor() { }

  ngOnInit(): void {
  }

  toggle(theme:string){
    this.theme=theme
  }

}
