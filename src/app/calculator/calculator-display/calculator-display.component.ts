import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-calculator-display',
  templateUrl: './calculator-display.component.html',
  styleUrls: ['./calculator-display.component.scss']
})
export class CalculatorDisplayComponent {
  @Input() value: number;
  @Input() floatValue: number;
  @Input() dotOn: boolean;
}
