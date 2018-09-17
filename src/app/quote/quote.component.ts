import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote('Wiseman', 'Dear Maths grow up and start solving your own problems', 'George kim'),
    new Quote('Mhenga', 'If hardwork pays show me a rich donkey', 'the Gag'),
  ]



  constructor() { }

  ngOnInit() {
  }

}
