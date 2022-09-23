import { Component, EventEmitter, Output } from '@angular/core';
import { Operators } from '../../enums/operators';

@Component({
  selector: 'calc-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent {

  operators = Operators;
  
  readonly keyboardNumbers: (number | Operators)[][] = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0, Operators.decimal, Operators.sign]
  ];

  readonly keyboardFunctions: Operators[] = [
    Operators.add,
    Operators.subtract,
    Operators.multiply,
    Operators.divide
  ]

  /**
   * Value issued by each key.
   */
  @Output() keyboardOutput = new EventEmitter<string>();

  /**
   * Button event trigger.
   * @param item value of button (number, decimal, function, ...).
   */
  onButtonClick(item: string | number | Operators) {
    this.keyboardOutput.emit(item.toString());
  }
}
