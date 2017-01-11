import { Component } from '@angular/core';
import {PetsApi} from "./api/api/PetsApi";
import {Pets} from "./api/model/Pets";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pets: Pets;

  constructor(private api:PetsApi){
    this.api.listPets().subscribe((pets:Pets)=>{
      this.pets = pets;
    })
  }
}
