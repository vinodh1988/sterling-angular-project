import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  people=['Rahul','Rajan','Ramesh','Rakesh','Ajay','Ashok','Ashish']
  boxes:string[]=['Vegetables','Fruits','Spices']
  items:string[][]=[
    ['Potato','Tomato','Onion','Chilli'],
    ['Grapes','Banana','Orange','Mango'],
    ['Pepper','Cinnamon','Cummin']
  ]

  message="The last item you have selected is nothing"
  
  handle(x:string){
   this.message= "The last item you have selected is "+x;
  }
}
