import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote('Wiseman', 'Dear Maths grow up and start solving your own problems', 'George kim', 0, 0),
    new Quote('Mhenga', 'If hardwork pays show me a rich donkey', 'the Gag', 0, 0),
  ]

  addNewQuote(quote){
    this.quotes.push(quote)
  }

  like(index) {
    this.quotes[index].likes += 1;
  }

  dislike(index) {
    this.quotes[index].dislike += 1;
  }



  constructor() { }

  ngOnInit() {
  }

}
