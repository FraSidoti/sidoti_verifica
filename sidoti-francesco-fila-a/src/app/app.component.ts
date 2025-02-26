import {RouterOutlet} from '@angular/router'
import { Component } from '@angular/core';
import {TerzoComponent} from './terzo/terzo.component';
import { SecondoComponent } from './secondo/secondo.component';
import { QuartoComponent } from './quarto/quarto.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [SecondoComponent, TerzoComponent, QuartoComponent]
})
export class AppComponent {
  title = 'sidoti-francesco-fila-a';
  burzum: string = "app";
}
