import { Component, OnInit } from '@angular/core';
import { EscritoresService } from '../../services/escritores.service';
import { Escritor } from '../../models/escritor.model'

@Component({
  selector: 'app-lista-escritores',
  templateUrl: './lista-escritores.component.html',
  styleUrls: ['./lista-escritores.component.scss']
})
export class ListaEscritoresComponent implements OnInit {

  arrEscritores: Escritor[];
  arrCharacters: any[];

  constructor(
    private escritoresService: EscritoresService
  ) { }

  async ngOnInit() {
    // this.arrEscritores = this.escritoresService.getAll();
    // this.escritoresService.getAllPromise().then(escritores => {
    //   this.arrEscritores = escritores;
    // });
    this.arrEscritores = await this.escritoresService.getAllPromise();
    this.escritoresService.getAllCharacters().subscribe(response => this.characterResponse(response));
    
  }

  characterResponse(response: any){
    this.arrCharacters = response.results
    console.log(this.arrCharacters)
  }


  async onChangeSelect($event){
    const paisSelected = $event.target.value;
    if(paisSelected === 'todos'){
      this.arrEscritores = await this.escritoresService.getAllPromise();
    }else{
      this.arrEscritores = await this.escritoresService.getByPais(paisSelected);
    }
  }
}
