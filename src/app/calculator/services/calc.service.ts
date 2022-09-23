import { Injectable } from '@angular/core';
import { Operators } from '../enums/operators';
import { OperationsService } from './operations.service';

@Injectable()
export class CalcService {

  private firstNumber: string = '';

  private secondNumber: string = '';

  private currentFunction: string = '';

  private currentResult: string = '';

  private isNegativeNumber: boolean = false;

  private isCurrentDecimal: boolean = false;

  get firstValue(): string {
    return this.firstNumber;
  }

  get secondValue(): string {
    return this.secondNumber;
  }

  get currentFunc(): string {
    return this.currentFunction;
  }

  get result(): string {
    return this.currentResult;
  }

  constructor(private operations: OperationsService) {}

  buttonPressed(item: string) {
    const regex = /^[0-9]*$/;
    const isNumber = regex.test(item);

    if (isNumber)
      this.onButtonNumberClick(item);
    else
      this.onButtonFunctionClick(item);
  }

  private isFunctionNotDefined(): boolean {
    return this.currentFunction === '';
  }

  private isCurrentResultNotEmpty(): boolean {
    return this.currentResult !== '';
  }

  private onButtonNumberClick(item: string) {
    if (this.isFunctionNotDefined()) {
      this.firstNumber += item;
    }
    else if (!this.isFunctionNotDefined() && !this.isCurrentResultNotEmpty()) {
      this.secondNumber += item;
    }
    else {
      return;
    }
  }

  private onButtonFunctionClick(item: string) {

    switch (item) {
      case Operators.c:
        this.eraseAll();
        break;
      case Operators.decimal:
        this.setDecimal(item);
        break;
      case Operators.sign:
        this.setSign();
        break;
      case Operators.result:
        this.getResult();
        break;
      default: {
        this.setFunction(item);
      };
    }

  }

  private eraseAll() {
    this.firstNumber = '';
    this.secondNumber = '';
    this.currentFunction = '';
    this.currentResult = '';
    this.isNegativeNumber = false;
    this.isCurrentDecimal = false;
  }

  private setDecimal(item: string) {
    if (!this.isCurrentDecimal) {
      this.isCurrentDecimal = true;

      if (this.isFunctionNotDefined() && this.firstNumber === '') {
        this.firstNumber = '0';
      }
      else if (!this.isFunctionNotDefined() && this.secondNumber === '') {
        this.secondNumber = '0';
      }

      this.onButtonNumberClick(item);
    }
  }

  private setSign() {

    if (this.isCurrentResultNotEmpty()) {
      return;
    }

    this.isNegativeNumber = !this.isNegativeNumber;

    if (this.isFunctionNotDefined()) {
      if (this.isNegativeNumber) {
        this.firstNumber = `-${this.firstNumber}`;
      } else {
        this.firstNumber = this.firstNumber.replace('-', '');
      }
    } else {
      if (this.isNegativeNumber) {
        this.secondNumber = `-${this.secondNumber}`;
      } else {
        this.secondNumber = this.secondNumber.replace('-', '');
      }
    }

  }

  private setFunction(item: string) {
    if (this.isCurrentResultNotEmpty()) {
      this.firstNumber = this.currentResult;
      this.secondNumber = '';
      this.currentFunction = item;
      this.isNegativeNumber = false;
      this.isCurrentDecimal = false;
      this.currentResult = '';
      return;
    }
    if (this.firstNumber !== '' && this.firstNumber !== '-') {
      this.currentFunction = item;
      this.isNegativeNumber = false;
      this.isCurrentDecimal = false;
    }
  }

  private getResult() {

    if (this.isFunctionNotDefined()) {
      return;
    }

    if (this.secondNumber === '' || this.secondNumber === '-') {
      return;
    }

    let result: number | string = 0;

    switch (this.currentFunction) {
      case Operators.add:
        result = this.operations.add(Number(this.firstNumber), Number(this.secondNumber));
        break;
      case Operators.subtract:
        result = this.operations.sub(Number(this.firstNumber), Number(this.secondNumber));
        break;
      case Operators.multiply:
        result = this.operations.mul(Number(this.firstNumber), Number(this.secondNumber));
        break;
      case Operators.divide:
        result = this.operations.div(Number(this.firstNumber), Number(this.secondNumber));
        break;
    }

    this.currentResult = result.toString();

  }
  
}
