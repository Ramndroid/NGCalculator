import { Component, Input } from '@angular/core';

@Component({
  selector: 'calc-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent {

  @Input() firstNumber: string = '3';

  @Input() secondNumber: string = '3';

  @Input() currentFunction: string = '+';

  @Input() currentResult: string = '6';

}
