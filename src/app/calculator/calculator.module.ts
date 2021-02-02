import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalculatorComponent} from './calculator.component';
import {CalculatorButtonsComponent} from './calculator-buttons/calculator-buttons.component';
import {CalculatorDisplayComponent} from './calculator-display/calculator-display.component';



@NgModule({
  declarations: [
    CalculatorComponent,
    CalculatorButtonsComponent,
    CalculatorDisplayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CalculatorComponent]
})
export class CalculatorModule { }
