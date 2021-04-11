import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Escritor } from 'src/app/models/escritor.model';
import { EscritoresService } from 'src/app/services/escritores.service';

@Component({
  selector: 'app-detalle-escritor',
  templateUrl: './detalle-escritor.component.html',
  styleUrls: ['./detalle-escritor.component.scss']
})
export class DetalleEscritorComponent implements OnInit {
  escritor: Escritor;
  escritorId: number;

  constructor(
    private activateRute: ActivatedRoute,
    private escritoresService : EscritoresService,
  ) { 
  }

  ngOnInit() {
    this.activateRute.params.subscribe(async urlParams =>{
      this.escritorId = parseInt(urlParams.idEscritor);
      this.escritor =  await this.escritoresService.getById(parseInt(urlParams.idEscritor));
    });
  }

}
