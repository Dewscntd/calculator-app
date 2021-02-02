import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {OperatorsEnum} from '../calculator.interface';

@Component({
  selector: 'app-calculator-buttons',
  templateUrl: './calculator-buttons.component.html',
  styleUrls: ['./calculator-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorButtonsComponent implements OnInit {
  operatorsEnum = OperatorsEnum;
  currentOperator = null;
  value: number;
  operand: number;
  constructor(
    private cdRef: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.value = 0;
    this.operand = 0;
  }

  addChar(char: string | number): void {
    if (this.currentOperator) {
      this.operand = this.value; // save last value as operand and start with fresh value for the second argument
      this.value = 0;
    }
    this.value = Number(this.value.toString() + char.toString());
    this.cdRef.detectChanges();
  }

  applyOperator(operator: OperatorsEnum) {
    this.currentOperator = operator;
  }

}
