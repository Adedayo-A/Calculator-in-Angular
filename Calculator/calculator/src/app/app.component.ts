import { Component, ViewChild } from '@angular/core';

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
  btnClear: string = 'AC';
  disabled: boolean;

  // ARITHMETIC OPERATIONS
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

  percentage(num1: number, strResult: string) {
    return strResult = (num1 / 100).toString();
  }


// ONCLICK OPERATIONS
  keyPress(key: string) {
    if (key === '/' || key === 'x' || key === '-' || key === '+' || key == '%') {
      this.numbers1 = parseFloat(this.inputText);
      this.arithmeticSymbol = key;
      if (key === '%') {
        this.inputText = this.percentage(this.numbers1, this.inputText)
      }
    }
    if(this.inputText.startsWith('0')) {
      this.inputText = '';
    }
    this.inputText += key;
    console.log(this.inputText);
  }

  // if(this.inputText === '0') {
  //   this.btnClear = "AC";
  // }
  // else {
  //   this.btnClear = "C";
  // }
  // const lastKey = this.inputText[this.inputText.length - 1];
  //     console.log(lastKey);


  reset() {
    if(this.inputText !== '') {
      this.inputText = '0';
    }
    else {
      this.inputText = '';
    }
  }

  power() {
    if(this.inputText === '') {
      return this.inputText = "0";
    }
    else if (this.inputText !== '') {
      return this.inputText = '';
    }
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
