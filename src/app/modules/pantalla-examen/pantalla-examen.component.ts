import {Component, OnInit} from '@angular/core';
import {Pokemon} from "./models/pokemon";
import {PokemonService} from "./services/pokemon.service";
import {Message, MessageService} from "primeng/api";

@Component({
  selector: 'app-pantalla-examen',
  templateUrl: './pantalla-examen.component.html',
  styleUrls: ['./pantalla-examen.component.css'],
  providers: [MessageService]
})
export class PantallaExamenComponent implements OnInit {

  tituloExamen: string = 'Examen Angular - Milton Cabrera App Pokemon';

  listPokemon: Pokemon[] = [];

  constructor(private pokemonServices: PokemonService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getAllPokemon();
  }

  addMsjSuccess() {
    this.messageService.add({severity: 'success', summary: 'Mensaje Informativo', detail: 'Lista Consultada Exitosamente!!'});
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Mensaje Informativo', detail: 'Lista Consultada Exitosamente!!' });
  }

  getAllPokemon() {
    this.pokemonServices.initEventPokemon().subscribe(responsePokemon => {
      this.listPokemon = responsePokemon.results;
      this.showSuccess();
    });

  }


}
