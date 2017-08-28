import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCbAJeD1QKFTt5kFqHrUtVDo9GrgrIhAhA',
      authDomain: 'ng-recipe-book-b5dd7.firebaseapp.com',
    });
  }
}
