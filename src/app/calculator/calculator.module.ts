import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { ScreenComponent } from './components/screen/screen.component';
import { CalculatorComponent } from './pages/calculator.component';
import { OperationsService } from './services/operations.service';
import { CalcService } from './services/calc.service';


@NgModule({
  declarations: [
    KeyboardComponent,
    ScreenComponent,
    CalculatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalculatorComponent
  ],
  providers: [
    CalcService,
    OperationsService
  ]
})
export class CalculatorModule { }
