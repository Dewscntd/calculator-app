import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActionEnum, CalcButtonEnum, OperatorsEnum} from './calculator.interface';
import {CalculatorService} from './calculator.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorComponent implements OnInit {
  dotOn = false;
  operatorsEnum = OperatorsEnum;
  currentOperator = null;
  value: number;
  floatValue: number;
  operand: number;

  constructor(
    private cdRef: ChangeDetectorRef,
    private calcService: CalculatorService,

  ) {
  }

  ngOnInit(): void {
    this.resetValue();
    this.operand = null;
  }

  addChar(char: string | number): void {
    // Maybe better change to input

    if (char === '.' && !this.dotOn) {
      this.dotOn = true;
      this.cdRef.detectChanges();
    }

    if (this.currentOperator && !this.operand) {
      this.operand = this.getFloatValue(); // save last value as operand and start with fresh value for the second argument
      this.resetValue();
    }
    if (this.dotOn) {
      this.floatValue = Number((this.floatValue || '').toString() + char.toString());
    } else {
      this.value = Number(this.value.toString() + char.toString());
    }
    this.cdRef.detectChanges();
  }

  applyOperator(operator: OperatorsEnum): void {
    if (this.operand) {
      this.value = this.calc();
      this.operand = null;
    }
    this.currentOperator = operator;
    this.cdRef.detectChanges();
  }

  calc(): number {
    if (!this.currentOperator || typeof this.operand !== 'number' || typeof this.value !== 'number') {
      return;
    }
    this.value = this.calcService.calc(
      this.operand,
      this.calcService.getFloatValue(this.value, this.floatValue),
      this.currentOperator
    );
    this.operand = null;
    this.currentOperator = null;
    this.cdRef.detectChanges();
    console.log('calculated!', this.value);
  }


  buttonClicked([button, type]: [string | number, CalcButtonEnum]): void {
    const actionByType = {
      [CalcButtonEnum.action]: () => button === ActionEnum.equals ? this.calc() : null,
      [CalcButtonEnum.digit]: () => this.addChar(button),
      [CalcButtonEnum.operator]: () => this.applyOperator(button as OperatorsEnum),
    };
    actionByType[type]();
  }

  getFloatValue(): number {
    return Number(`${this.value}.${this.floatValue || 0}`);
  }

  private resetValue(): void {
    this.value = 0;
    this.floatValue = null;
    this.dotOn = false;
  }

}
