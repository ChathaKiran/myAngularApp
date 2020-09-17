import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  constructor() { }
  ngOnInit() {}

  //Local variables
  numberToDisplay = '0';
  firstOperand = null;
  operator = null;
  readyToTakeSecondOperand = false;

  public onDigitClicked(clickedDigit: string){
    if(this.readyToTakeSecondOperand){
      //Read first digit of second operand
      this.numberToDisplay = clickedDigit;
      this.readyToTakeSecondOperand = false;
    }
    else{
      //If it is the first digit of first operand, just show it. If it is subsequent digit, append it to existing number displayed.
      this.numberToDisplay === '0'? this.numberToDisplay = clickedDigit : this.numberToDisplay += clickedDigit;
    }
  }
  
  onDecimalClicked(){
    if(!this.numberToDisplay.includes('.')){
        this.numberToDisplay += '.'; 
    }
  }
  
  public onOperatorClicked(clickedOperator: string){
    if(this.firstOperand === null){
      this.firstOperand = Number(this.numberToDisplay);
    }else if(this.operator){
      const result = this.doCalculation(this.operator , Number(this.numberToDisplay))
      this.numberToDisplay = String(result);
      this.firstOperand = result;
    }

    this.operator = clickedOperator;
    this.readyToTakeSecondOperand = true;
  }
  
  public onAllClearClicked(){
    this.numberToDisplay = '0';
    this.firstOperand = null;
    this.operator = null;
    this.readyToTakeSecondOperand = false;
  }  

  private doCalculation(op , secondOperand){
    switch (op){
      case '+':
        return this.firstOperand += secondOperand; 
      case '-': 
        return this.firstOperand -= secondOperand; 
      case '*': 
        return this.firstOperand *= secondOperand; 
      case '/': 
        return this.firstOperand /= secondOperand; 
      case '=':
        return secondOperand;
    }
  }
}