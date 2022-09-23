import { Component } from '@angular/core';
import { CalcService } from '../services/calc.service';

@Component({
  selector: 'calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  constructor(private calc: CalcService) { }

  get firstNumber(): string {
    return this.calc.firstValue;
  }

  get secondNumber(): string {
    return this.calc.secondValue;
  }

  get currentFunction(): string {
    return this.calc.currentFunc;
  }

  get result(): string {
    return this.calc.result;
  }

  buttonPressed(item: string) {
    this.calc.buttonPressed(item);
  }
}
