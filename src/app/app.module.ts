import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorDisplayComponent } from './calculator/calculator-display/calculator-display.component';
import { CalculatorButtonsComponent } from './calculator/calculator-buttons/calculator-buttons.component';
import { ButtonComponent } from './design/button/button.component';
import { InputComponent } from './design/input/input.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
