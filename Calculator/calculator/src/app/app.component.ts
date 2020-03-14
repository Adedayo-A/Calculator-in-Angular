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
  rootNum1: any;
  sqrRootSymbol: string;
  rootNum2: number;
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
  lastInputedKey: string;
  cubeRoot: boolean;
  bigFont: boolean = true;

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
      this.bigFont = false;
      return strResult = "Error..range exceeded";
    } else {
      this.maxRange = false;
      this.bigFont = true;
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
      this.bigFont = false;
      return strResult = "Error..range exceeded";
    } else {
      this.maxRange = false;
      this.bigFont = true;
    }
    return strResult;
  }

  percentage(num1: number, strResult: string) {
    return strResult = (num1 / 100).toString();
  }

  root(num1: number, strResult: string, num2: number) {
    // strResult = (num2 * Math.sqrt(num1)).toString();
    strResult = Math.pow(num1, 1/num2).toString();
    if(strResult.length >= 10) {
      this.maxRange = true;
      this.bigFont = false;
      return strResult = strResult.substr(0, 9);

      // return strResult = "Error..range exceeded";
    } else {
      this.maxRange = false;
      this.bigFont = true;
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
    
    if(this.disabled === true) {
      this.resetResult();
      return false;
    }

    if (key === 'AC') {
      this.arithmeticOperator = false;
      this.maxRange = false;
      this.bigFont = true;
      this.resetResult();
      this.arithmeticSymbol = '';
      return this.inputText = '0';
    }
    if (key === '/' || key === 'x' || key === '-' || key === '+' || key === '%') {
      const lastcharInText = this.inputText[this.inputText.length - 1];

      if(lastcharInText === '/' || lastcharInText === 'x' || lastcharInText === '-' || lastcharInText === '+') {
        return
      }

      this.numbers1 = parseFloat(this.inputText);
      console.log('operand1 = ', this.numbers1);
      this.arithmeticSymbol = key;
      this.lastInputedKey = 'operator';
      console.log("I got to last Input Operator Sect ==", this.lastInputedKey);
      this.signCalled = true;
      if (key === '%' && this.inputText !== '0') {
        console.log('Did I get here');
        return this.inputText = this.percentage(this.numbers1, this.inputText)
      }
      return
    }

    // OTHER KEYS
    if(key === 'M+') {
      if(this.inMemory.toString() !== '') {
        this.inMemory = parseFloat(this.inputText);
      } else {
        this.inMemory = parseFloat(this.inputText);
      }
    }

    if(this.inputText.includes('.') && key === '.') {
      // this.maxRange = true;
      // this.inputText = "Invalid Input";
      return;
    }


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
      this.arithmeticSymbol = key;
      this.bigFont = false;
      this.cubeRoot = true;
      console.log('cube root class = ', this.cubeRoot);
      console.log('big font class = ', this.bigFont);

    } else {
      this.bigFont = true;
    }

    if(key === 'cos') {
      console.log('did cos get here');
      this.arithmeticSymbol = key;
    }

    if(key === 'sine') {
      console.log('did sine get here');
      this.arithmeticSymbol = key;
    }

    if(key === 'tan') {
      console.log('did cos get here');
      this.arithmeticSymbol = key;
    }

    if(this.inputText.length >= 10) {
      this.maxRange = true;
      this.bigFont = false;
      this.inputText = "Error..range exceeded"
      return;
    } else {
      this.maxRange = false;
      this.bigFont = true;
    }


    if(this.resultGenerated === true) {
      this.inputText = '';
      this.rootNum1 = parseFloat(this.inputText) || 1;
      console.log("root num1 = ",this.rootNum1);
      this.tanNum1 = parseFloat(this.inputText) || 1;
      this.sineNum1 = parseFloat(this.inputText) || 1;
      this.cosNum1 = parseFloat(this.inputText) || 1;

      console.log('resGen is true and this is the input Text ==', this.inputText);
      this.resultGenerated = false;
      if (this.signCalled === true) {
        this.inputText = '';
        this.inputText += key;
        this.signCalled = false;
        this.lastInputedKey = 'number';
        console.log("I got to last Signcalledtrue Input Sect ==", this.lastInputedKey);
      } else {
        this.inputText += key;
        this.lastInputedKey = 'number';
        console.log("I got to last Signcalledfalse Input Sect ==", this.lastInputedKey);
      }
    } else {
      this.rootNum1 = parseFloat(this.inputText) || 1;
      console.log("root num1 = ",this.rootNum1);
      this.tanNum1 = parseFloat(this.inputText) || 1;
      this.sineNum1 = parseFloat(this.inputText) || 1;
      this.cosNum1 = parseFloat(this.inputText) || 1;
      console.log('resGen is false');
      if (this.signCalled === true) {
        this.inputText = '';
        this.inputText += key;
        this.lastInputedKey = 'number';
        console.log("I got to last SignCalledtrue Input Sect ==", this.lastInputedKey);
        this.signCalled = false;
      } else {
        this.inputText += key;
        this.lastInputedKey = 'number';
        console.log("I got to last SignCalledFalse Input Sect ==", this.lastInputedKey);
      }
    }
  }

  power() {
    if(this.inputText === '') {
      this.disabled = false;
      this.maxRange = false;
      this.bigFont = true;
      this.arithmeticSymbol = '';
      return this.inputText = "0";
    }
    else if (this.inputText !== '') {
      this.disabled = true;
      return this.inputText = '';
    }
  }

  getAnswer() {
    let lastChar = this.inputText[this.inputText.length - 1];
    if(this.disabled === true) {
      this.resetResult();
      return false;
    }
    
    // this.numbers2 = parseFloat(this.inputText.split(this.arithmeticSymbol)[1]);  
    if(this.lastInputedKey === 'number') {
      let result;
      result = this.numbers2 = parseFloat(this.inputText);
      result = this.rootNum2 = parseFloat(this.inputText.split(this.arithmeticSymbol)[1]);
      // console.log("root num2 = ",this.rootNum2, "and input text =", this.inputText);
      result = this.cosNum2 = parseFloat(this.inputText.split(this.arithmeticSymbol)[1]);
      result = this.sineNum2 = parseFloat(this.inputText.split(this.arithmeticSymbol)[1]);
      result = this.tanNum2 = parseFloat(this.inputText.split(this.arithmeticSymbol)[1]);
      console.log('result ==', result);
      if(isNaN(result) ) {
        return;
      }
    } else {
      return;
    }

    
    if (this.arithmeticSymbol === '') {
      console.log('I got to arithmetic symbol = empty');
      console.log('parse float ', parseFloat(lastChar));
      return;
     }

    if (this.arithmeticSymbol === '/') {
      this.inputText = this.division(this.numbers1, this.numbers2, this.inputText);
      this.resultGenerated = true;
      this.arithmeticSymbol = '';
    } else if (this.arithmeticSymbol === 'x') {
      this.inputText = this.multiplication(this.numbers1, this.numbers2, this.inputText);
      this.resultGenerated = true;
      this.arithmeticSymbol = '';
    } else if (this.arithmeticSymbol === '-') {
      this.inputText = this.subtraction(this.numbers1, this.numbers2, this.inputText);
      this.resultGenerated = true;
      this.arithmeticSymbol = '';
    } else if (this.arithmeticSymbol === '+') {
      this.inputText = this.addition(this.numbers1, this.numbers2, this.inputText);
      this.resultGenerated = true;
      this.arithmeticSymbol = '';
    } else if(this.arithmeticSymbol === '√') {
      console.log('sqroot nums are ', this.rootNum1, this.rootNum2)
      this.inputText = this.root(this.rootNum2, this.inputText, this.rootNum1);
      this.resultGenerated = true;
      this.arithmeticSymbol = '';
    } else if(this.arithmeticSymbol === 'cos') {
      this.inputText = this.cos(this.cosNum1, this.cosNum2, this.inputText);
      this.resultGenerated = true;
      this.arithmeticSymbol = '';
    } else if(this.arithmeticSymbol === 'sine') {
      this.inputText = this.sine(this.sineNum1, this.sineNum2, this.inputText);
      this.resultGenerated = true;
      this.arithmeticSymbol = '';
    } else if(this.arithmeticSymbol === 'tan') {
      this.inputText = this.tan(this.tanNum1, this.tanNum2, this.inputText);
      this.resultGenerated = true;
      this.arithmeticSymbol = '';
    } else {
      this.inputText = "invalid operation";
      this.resultGenerated = true;
      this.arithmeticSymbol = '';
      this.maxRange = true;
      this.bigFont = false;
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


