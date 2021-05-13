import { Country } from './../../interfaces/pais.interface';
import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino = '';
  hayError = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.termino = termino;
    this.paisService.buscarPais(this.termino).subscribe(
      (paises) => {
        this.paises = paises;
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.hayError = false;
  }
}
