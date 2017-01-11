import { Component } from '@angular/core';
import {PetsApi} from "./api/api/PetsApi";
import {Pet} from "./api/model/Pet";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pets: Array<Pet>;

  constructor(private api:PetsApi){
    this.api.listPets().subscribe((pets:Array<Pet>)=>{
      this.pets = pets;
    })
  }
}
