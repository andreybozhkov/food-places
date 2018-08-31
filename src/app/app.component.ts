import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Food Places';

  ngOnInit(): void {
    let firebaseConfig = {
      apiKey: "AIzaSyAQJ_rkFvEVYaeN9Uc_Fm6WbCbp8o-SW5Y",
      authDomain: "food-places-andreybozhkov.firebaseapp.com",
      databaseURL: "https://food-places-andreybozhkov.firebaseio.com/"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
