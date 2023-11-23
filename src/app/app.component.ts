import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {CalculatriceComponent} from "./calculatrice/calculatrice.component";
import {CompteurDeCalculComponent} from "./compteur-de-calcul/compteur-de-calcul.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [CommonModule, RouterOutlet, CalculatriceComponent, CompteurDeCalculComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjetCalculatrice';
}


