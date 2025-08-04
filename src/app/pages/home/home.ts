import { Component } from '@angular/core';
import { Navebar } from "../../components/navebar/navebar";
import { Hero } from "./components/hero/hero";

@Component({
  selector: 'app-home',
  imports: [Navebar, Hero],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
