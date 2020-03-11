import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  mainText = '';

  keyPress(key: string) {
    this.mainText += key;
  }

  Clear() {
    this.mainText = '0';
  }

  getAnswer() {
  }
}
