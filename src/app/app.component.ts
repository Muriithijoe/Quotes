import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quote('Wiseman', 'Dear Maths grow up and start solving your own problems', 'George kim', 0, 0),
    new Quote('Mhenga', 'If hardwork pays show me a rich donkey', 'the Gag', 0, 0 ),
  ]

  
}
