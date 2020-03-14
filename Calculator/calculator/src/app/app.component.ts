import { Component, ViewChild, OnInit, OnDestroy, ViewEncapsulation} from '@angular/core';
// import { DOCUMENT } from '@angular/platform-browser';
// import { threadId } from 'worker_threads';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'calculator';
  inputText: string = '';
  calcText: string;
  arithmeticSymbol: string;
  numbers1: number;
  numbers2: number;
  // btnClear: string = 'AC';
  disabled: boolean = true;
  arithmeticOperator: boolean = false;
  resultGenerated: boolean = false;
  maxRange: boolean;
  inputNum: string;
  signCalled: boolean;
  sqrootNum1: any;
  sqrRootSymbol: string;
  sqrootNum2: number;
  cosNum1: number;
  cosSymbol: string;
  cosNum2: number;
  tanNum1: number;
  tanSymbol: string;
  sineSymbol: string;
  sineNum1: number
  sineNum2: number;
  tanNum2: number;
  inMemory: number;

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
    if(strResult.length >= 10) {
      this.maxRange = true;
      return strResult = "Error..range exceeded";
    } else {
      this.maxRange = false;
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
    if(strResult.length >= 10) {
      this.maxRange = true;
      return strResult = "Error..range exceeded";
    } else {
      this.maxRange = false;
    }
    return strResult;
  }

  percentage(num1: number, strResult: string) {
    return strResult = (num1 / 100).toString();
  }

  sqrRoot(num1: number, strResult: string, num2: number) {
    strResult = (num2 * Math.sqrt(num1)).toString();
    if(strResult.length >= 10) {
      this.maxRange = true;
      return strResult = "Error..range exceeded";
    } else {
      this.maxRange = false;
    }
    return strResult;
  }

  cos(num1: number, num2: number, strResult: string) {
    strResult = (num1 * Math.cos(num2)).toString();
    if(strResult.length >= 10) {
      return strResult = strResult.substr(0, 9);
    }
    return strResult;
  }

  sine(num1: number, num2: number, strResult: string) {
    strResult = (num1 * Math.sin(num2)).toString();
    if(strResult.length >= 10) {
      return strResult = strResult.substr(0, 9);
    }
    return strResult;
  }

  tan(num1: number, num2: number, strResult: string) {
    strResult = (num1 * Math.tan(num2)).toString();
    if(strResult.length >= 10) {
      return strResult = strResult.substr(0, 9);
    }
    return strResult;
  }



// UTILITY FUNCTION
startsWith() {
  if(this.inputText[1] === '+' || this.inputText[0] === '-' || this.inputText[0] === 'x' || this.inputText[0] === '/' || this.inputText[0] === '%') {
    console.log(this.inputText[1]);
    return this.inputText = "";
  }
}

resetResult() {
  if(this.resultGenerated == true) {
    this.inputText = '';
  }
}

// ONCLICK OPERATIONS
  keyPress(key: string) {
    
    console.log(this.disabled);
    console.log('Range = ', this.maxRange);

    if(this.disabled === true) {
      this.resetResult();
      return false;
    }

    if (key === 'AC') {
      this.arithmeticOperator = false;
      this.maxRange = false;
      this.resetResult();
      return this.inputText = '0';
    }
    if (key === '/' || key === 'x' || key === '-' || key === '+' || key === '%') {
      const lastInputedKey = this.inputText[this.inputText.length - 1];
      console.log('lastInput key', lastInputedKey);
      console.log('length is', this.inputText.length);

      if(lastInputedKey === '/' || lastInputedKey === 'x' || lastInputedKey === '-' || lastInputedKey === '+') {
        return
      }

      this.numbers1 = parseFloat(this.inputText);
      console.log('nos 1', this.numbers1);
      this.arithmeticSymbol = key;
      this.signCalled = true;
      if (key === '%' && this.inputText !== '0') {
        console.log('Did I get here');
        return this.inputText = this.percentage(this.numbers1, this.inputText)
      }
      return
    }

    if(key === 'M+') {
      if(this.inMemory.toString() !== '') {
        this.inMemory = parseFloat(this.inputText);
      } else {
        this.inMemory = parseFloat(this.inputText);
      }
    }

    if(this.inputText.includes('.') && key === '.') {
      this.maxRange = true;
      return this.inputText = "Invalid Input";
    }
    // else {
    //   this.maxRange = false;
    // }

    if(this.inputText.startsWith('0') && this.inputText.length === 1) {
      if (key === '.') {
        this.inputText = '0';
        console.log("I got here");
      }
      else {
        this.inputText = '';
      }
    }

    if(key === '√') {
      console.log('did sqroot got here');
      this.sqrootNum1 = parseFloat(this.inputText) || 1;
      console.log('sqr root', this.sqrootNum1);
      this.arithmeticSymbol = key;
    }

    if(key === 'cos') {
      console.log('did cos get here');
      this.cosNum1 = parseFloat(this.inputText) || 1;
      console.log('cos first num', this.cosNum1);
      this.arithmeticSymbol = key;
    }

    if(key === 'sine') {
      console.log('did sine get here');
      this.sineNum1 = parseFloat(this.inputText) || 1;
      console.log('cos first num', this.sineNum1);
      this.arithmeticSymbol = key;
    }

    if(key === 'tan') {
      console.log('did cos get here');
      this.tanNum1 = parseFloat(this.inputText) || 1;
      console.log('tan val is ', this.tanNum1);
      this.arithmeticSymbol = key;
    }

    if(this.inputText.length >= 10) {
      this.maxRange = true;
      this.inputText = "Error..range exceeded"
      return;
    } else {
      this.maxRange = false;
    }


    if(this.resultGenerated === true) {
      this.inputText = '';
      this.resultGenerated = false;
      if (this.signCalled === true) {
        this.inputText = '';
        this.inputText += key;
        this.signCalled = false;
      } else {
        this.inputText += key;
      }
    } else {
      if (this.signCalled === true) {
        this.inputText = '';
        this.inputText += key;
        this.signCalled = false;
      } else {
        this.inputText += key;
      }
    }
    console.log(this.inputText);
  }



  power() {
    if(this.inputText === '') {
      this.disabled = false;
      this.maxRange = false;
      return this.inputText = "0";
    }
    else if (this.inputText !== '') {
      this.disabled = true;
      return this.inputText = '';
    }
  }


  getAnswer() {
    // this.numbers2 = parseFloat(this.inputText.split(this.arithmeticSymbol)[1]);
    this.numbers2 = parseFloat(this.inputText);
    this.sqrootNum2 = parseFloat(this.inputText.split(this.arithmeticSymbol)[1]);
    this.cosNum2 = parseFloat(this.inputText.split(this.arithmeticSymbol)[1]);
    this.sineNum2 = parseFloat(this.inputText.split(this.arithmeticSymbol)[1]);
    this.tanNum2 = parseFloat(this.inputText.split(this.arithmeticSymbol)[1]);

    console.log('cos Num 2' , this.cosNum2);


    if (this.arithmeticSymbol === '/') {
      this.inputText = this.division(this.numbers1, this.numbers2, this.inputText);
      this.resultGenerated = true;
    } else if (this.arithmeticSymbol === 'x') {
      this.inputText = this.multiplication(this.numbers1, this.numbers2, this.inputText);
      this.resultGenerated = true;
    } else if (this.arithmeticSymbol === '-') {
      this.inputText = this.subtraction(this.numbers1, this.numbers2, this.inputText);
      this.resultGenerated = true;
    } else if (this.arithmeticSymbol === '+') {
      this.inputText = this.addition(this.numbers1, this.numbers2, this.inputText);
      this.resultGenerated = true;
    } else if(this.arithmeticSymbol === '√') {
      this.inputText = this.sqrRoot(this.sqrootNum2, this.inputText, this.sqrootNum1)
    } else if(this.arithmeticSymbol === 'cos') {
      this.inputText = this.cos(this.cosNum1, this.cosNum2, this.inputText);
    } else if(this.arithmeticSymbol === 'sine') {
      this.inputText = this.sine(this.sineNum1, this.sineNum2, this.inputText);
    } else if(this.arithmeticSymbol === 'tan') {
      this.inputText = this.tan(this.tanNum1, this.tanNum2, this.inputText);
    } else {
      this.inputText = "invalid operation";
      this.resultGenerated = true;
      this.maxRange = true;
    }
  }
}

// UNNEEDED FUNCTIONS AFTER OPTIMIZATION

// || this.inputText === '0'

// if(this.inputText === '0') {
  //   this.btnClear = "AC";
  // }
  // else {
  //   this.btnClear = "C";
  // }
  // const lastKey = this.inputText[this.inputText.length - 1];
  //     console.log(lastKey);


  // reset() {
  //   if(this.inputText !== '') {
  //     this.inputText = '0';
  //   }
  //   else {
  //     this.inputText = '';
  //   }
  //   this.inputText = '0';
  // }

        // if (this.arithmeticOperator === true || this.inputText === '0') {
      //   return
      // }

      // this.arithmeticOperator = true;

              // "node_modules/bootstrap/dist/css/bootstrap.min.css"

    // <input type="text" maxlength="40" value="{{ inputText }}" class="display-screen">


