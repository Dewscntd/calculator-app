import {ChangeDetectionStrategy, Component, EventEmitter, HostListener, Output} from '@angular/core';
import {ActionEnum, allAvailableChars, CalcButtonEnum, OperatorsEnum} from '../calculator.interface';

@Component({
  selector: 'app-calculator-buttons',
  templateUrl: './calculator-buttons.component.html',
  styleUrls: ['./calculator-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorButtonsComponent {
  operatorsEnum = OperatorsEnum;
  actionsEnum = ActionEnum;
  buttonTypes = CalcButtonEnum;
  @Output() buttonClicked = new EventEmitter<[number | string, CalcButtonEnum]>();
  @HostListener('window:keyup', ['$event']) keyupFn(event): void {
    if (allAvailableChars.includes(event.key)) {
      const isAction = ActionEnum.equals === event.key;
      const isOperator = [
        OperatorsEnum.add,
        OperatorsEnum.subtract,
        OperatorsEnum.multi,
        OperatorsEnum.divide
      ].includes(event.key);
      const type: CalcButtonEnum = isAction
        ? CalcButtonEnum.action
        : isOperator ? CalcButtonEnum.operator : CalcButtonEnum.digit;
      this.buttonClick(event.key, type);
    }
  }

  buttonClick(button: string | number, type: CalcButtonEnum): void {
    this.buttonClicked.emit([button, type]);
  }
}
