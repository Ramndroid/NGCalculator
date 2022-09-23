import { Component, EventEmitter, Output } from '@angular/core';
import { Operators } from '../../enums/operators';

@Component({
  selector: 'calc-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent {

  @Output() keyboardOutput = new EventEmitter<string>();

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

  onButtonClick(item: string | number | Operators) {
    this.keyboardOutput.emit(item.toString());
  }
}
