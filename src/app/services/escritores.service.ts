import { Injectable } from '@angular/core';
import { ESCRITORES } from '../db/escritores.db';
import { Escritor } from '../models/escritor.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EscritoresService {

  constructor(private http: HttpClient) {

   }


   getAllCharacters(){
     return this.http.get("https://rickandmortyapi.com/api/character/");
   }
   
   getAll(): Escritor[] {
    return ESCRITORES;
  }

  getAllPromise(): Promise<Escritor[]>{
    return new Promise((resolve, reject)=>{
      resolve(ESCRITORES);
    });
  }

  getByPais(pPais: string): Promise<Escritor[]>{
    return new Promise((resolve, reject)=>{
      const arrFiltrado = ESCRITORES.filter(escritor =>{
        return escritor.pais === pPais;
      });
      resolve(arrFiltrado);
    });
  }

  getById(idEscritor: number): Promise<Escritor>{
    return new Promise((resolve, reject)=>{
      const escritorDetalle = ESCRITORES.find(escritor =>{
        return escritor.id === idEscritor
      });
      resolve(escritorDetalle);
    });
  }
}
