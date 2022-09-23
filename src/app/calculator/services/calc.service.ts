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

  /**
   * Checks if there is a main function defined.
   * @returns true if the main function is not defined.
   */
  private isFunctionNotDefined(): boolean {
    return this.currentFunction === '';
  }

  /**
   * Checks if there is currently a result in memory.
   * @returns true if there is some result.
   */
  private isCurrentResultNotEmpty(): boolean {
    return this.currentResult !== '';
  }

  /**
   * Entering a number by keyboard.
   * @param item number to introduce.
   */
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

  /**
   * Entering a function, sign or decimal by keyboard.
   * @param item operators, sign or decimal.
   */
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

  /**
   * Erase all values.
   */
  private eraseAll() {
    this.firstNumber = '';
    this.secondNumber = '';
    this.currentFunction = '';
    this.currentResult = '';
    this.isNegativeNumber = false;
    this.isCurrentDecimal = false;
  }

  /**
   * Add decimal element to current value.
   * @param item Symbol to represent the decimal.
   */
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

  /**
   * Adds a sign (+ or -) to the current value.
   */
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

  /**
   * Defines the operation to perform between the two numbers.
   * @param item operation to perform.
   */
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

  /**
   * Get the result of the operation between the two numbers.
   */
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
