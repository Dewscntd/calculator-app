import { Injectable } from '@angular/core';
import {OperatorsEnum} from './calculator.interface';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  calc(operand, value, operator): number {
    if (!operator || typeof operand !== 'number' || typeof value !== 'number') {
      return;
    }
    const operatorsActions = {
      [OperatorsEnum.add]: operand + value,
      [OperatorsEnum.subtract]: operand - value,
      [OperatorsEnum.multi]: operand * value,
      [OperatorsEnum.divide]: operand / value,
    };
    return Number(operatorsActions[operator].toFixed(8));
  }


  getFloatValue(value: number, floatValue: number): number {
    return Number(`${value}.${floatValue || 0}`);
  }
}
