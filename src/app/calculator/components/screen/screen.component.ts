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

  /**
   * Check if a string returns NaN.
   * @param value string to check.
   * @returns returns true if the string returns NaN.
   */
  isNotANumber(value: string) {
    return isNaN(Number(value));
  }
}
