import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quote('Arya Stark', 'Leave one wolf alive the sheep are never safe', 'George kim', 0, 0),
    new Quote('Tyrion Lannister', 'A mind needs books like a sword needs a whetstone', 'GOT enthusiast', 0, 0 ),
  ]

  
}
