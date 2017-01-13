import { Component } from '@angular/core';
import {PetApi} from "./api/api/PetApi";
import {Pet} from "./api/model/Pet";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pets: Array<Pet>;

  constructor(private api:PetApi){
    this.api.findPetsByStatus([Pet.StatusEnum.Pending.toString()]).subscribe((pets:Array<Pet>)=>{
      this.pets = pets;
    })
  }
}
