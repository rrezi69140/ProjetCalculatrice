import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-calculatrice',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],

  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.css'
})
export class CalculatriceComponent {

  public calculatrice: FormGroup;
  public operand1: FormControl = new FormControl<number>(0,[Validators.min(1),Validators.required]);
  public operand2: FormControl = new FormControl<number>(0,[Validators.min(1),Validators.required])
  public operateur: FormControl = new FormControl<string|null>('+',Validators.required)
  public resultat: number = 0;

  constructor() {

    this.calculatrice = new FormGroup({
      operande1: this.operand1,
      operateur: this.operateur,
      operande2: this.operand2,
    });
  }

  calcul(): void {

    console.log(this.operateur.value)

    switch (this.operateur.value){
      case "1":
        this.resultat = parseFloat(this.operand1.value)+ parseFloat(this.operand2.value);
        break;
      case "2":
        this.resultat = this.operand1.value-this.operand2.value;
        break;
      case "3":
        this.resultat = this.operand1.value/this.operand2.value;
        break;
      case "4":
        this.resultat = this.operand1.value*this.operand2.value;
        break;

    }
  }
}

