import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  inputText: string = '';
  calcText: string;
  arithmeticSymbol: string;
  numbers1: number;
  numbers2: number;


  keyPress(key: string) {
    if (key === '/' || key === 'x' || key === '-' || key === '+') {
      const lastKey = this.inputText[this.inputText.length - 1];
      console.log(lastKey);
      this.numbers1 = parseFloat(this.inputText);
      this.arithmeticSymbol = key;
    }
    this.inputText += key;
  }

  reset() {
    this.inputText = '';
  }

  division(num1: number, num2: number, strResult: string) {
    strResult = (num1 / num2).toString();
    console.log(strResult);
    if (strResult.length > 9) {
      return strResult = strResult.substr(0, 9);
    }
    return strResult;
  }

  multiplication(num1: number, num2: number, strResult: string) {
    strResult = (num1 * num2).toString();
    console.log(strResult);
    if (strResult.length > 9) {
      return strResult = strResult.substr(0, 9);
    }
    return strResult;
  }

  subtraction(num1: number, num2: number, strResult: string) {
    strResult = (num1 - num2).toString();
    console.log(strResult);
    return strResult;
  }

  addition(num1: number, num2: number, strResult: string) {
    strResult = (num1 + num2).toString();
    console.log(strResult);
    if (strResult.length > 9) {
      strResult = "error occured";
    }
    return strResult;
  }

  getAnswer() {
    this.numbers2 = parseFloat(this.inputText.split(this.arithmeticSymbol)[1]);
    if (this.arithmeticSymbol === '/') {
      this.inputText = this.division(this.numbers1, this.numbers2, this.inputText);
    } else if (this.arithmeticSymbol === 'x') {
      this.inputText = this.multiplication(this.numbers1, this.numbers2, this.inputText);
    } else if (this.arithmeticSymbol === '-') {
      this.inputText = this.subtraction(this.numbers1, this.numbers2, this.inputText);
    } else if (this.arithmeticSymbol === '+') {
      this.inputText = this.addition(this.numbers1, this.numbers2, this.inputText);
    } else {
      this.inputText = "invalid operations"
    }
  }
}
