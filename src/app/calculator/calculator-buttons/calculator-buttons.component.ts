import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {ActionEnum, CalcButtonEnum, OperatorsEnum} from '../calculator.interface';

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

  buttonClick(button: string | number, type: CalcButtonEnum): void {
    this.buttonClicked.emit([button, type]);
  }
}
