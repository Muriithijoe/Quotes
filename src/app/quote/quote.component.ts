import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote('Arya Stark', 'Leave one wolf alive the sheep are never safe', 'George kim', 0, 0),
    new Quote('Tyrion Lannister', 'A mind needs books like a sword needs a whetstone', 'GOT enthusiast', 0, 0 ),
    new Quote('Joffrey Baratheon', 'Paint stripes on a toad do not make a tiger', 'J.M.Wambugu', 0, 0 )
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

   deleteQuote (isComplete,index) {
     if (isComplete){
       let toDelete=confirm ('Are sure you want to delete ${this.quotes[index].name}')

       if(toDelete){
         this.quotes.splice(index,1)
       }
     }
  }



  constructor() { }

  ngOnInit() {
  }

}
