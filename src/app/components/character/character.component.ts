import { Component, OnInit } from '@angular/core';
import {CharacterService} from "../../services/character.service";
import {ICharacter} from "../../entities/character.interface";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  character: ICharacter;
  personag ={
    "birth_year": "19 BBY",
    "eye_color": "Blue",
    "films": [
      "https://swapi.co/api/films/1/",
    ],
    "gender": "Male",
    "hair_color": "Blond",
    "height": "172",
    "homeworld": "https://swapi.co/api/planets/1/",
    "mass": "77",
    "name": "Luke Skywalker",
    "skin_color": "Fair",
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-10T13:52:43.172000Z",
    "species": [
      "https://swapi.co/api/species/1/"
    ],
    "starships": [
      "https://swapi.co/api/starships/12/",
    ],
    "url": "https://swapi.co/api/people/1/",
    "vehicles": [
      "https://swapi.co/api/vehicles/14/"

    ]
  }

  constructor(private characterService: CharacterService,
              private activate: ActivatedRoute) {

    activate.params.subscribe(({characterName}) => {
      this.character = this.characterService.getCharacterByName(characterName);
    });
  }

  ngOnInit() {
  }

}
