import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { ScreenComponent } from './components/screen/screen.component';
import { CalculatorComponent } from './pages/calculator.component';



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
  ]
})
export class CalculatorModule { }
