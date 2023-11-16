import { Routes } from '@angular/router';
import {ComposantComponent} from "./composant/composant.component";
import {CalculatriceComponent} from "./calculatrice/calculatrice.component";

export const routes: Routes = [
  { path: 'mon_composant', component: ComposantComponent},
  { path: 'calculette', component: CalculatriceComponent}];
