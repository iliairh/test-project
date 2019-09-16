import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  someone = 'Hello world!';
  counter = 0;
  //           0                  1                  2
  arr = ['Hello world!', 'I Learn JavaScript', 'It\'s easy'];

  click() {
    if (this.counter > 2) {
      return;
    }
    this.someone = this.arr[this.counter];
    this.counter++;
  }
}
