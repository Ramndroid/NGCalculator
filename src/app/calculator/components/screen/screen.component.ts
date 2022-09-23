import { Component, Input } from '@angular/core';

@Component({
  selector: 'calc-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent {

  @Input() firstNumber: string = '';

  @Input() secondNumber: string = '';

  @Input() currentFunction: string = '';

  @Input() currentResult: string = '';

  isNotANumber(value: string) {
    return isNaN(Number(value));
  }
}
