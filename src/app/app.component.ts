import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MyFirstApp';
  skills:Array<string>=['HTML5','CSS3','JS','TS','Angular'];

  stdArr=[
    {
      fname:"Ankita",
      lname:"Kulkarni",
      email:"ankita123@gmail.com",
      contact:"1234567890"
    },
    {
      fname:"Sarita",
      lname:"Kulkarni",
      email:"sarita123@gmail.com",
      contact:"1234567890"
    },
    {
      fname:"Anita",
      lname:"Kulkarni",
      email:"anita123@gmail.com",
      contact:"1234567890"
    },
    {
      fname:"Harshita",
      lname:"Kulkarni",
      email:"harshita123@gmail.com",
      contact:"1234567890"
    },

  ]
}
