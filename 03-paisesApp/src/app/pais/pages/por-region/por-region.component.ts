import { Country } from './../../interfaces/pais.interface';
import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [],
})
export class PorRegionComponent implements OnInit {
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  paises: Country[] = [];
  regionActiva: string = '';

  constructor(private paisService: PaisService) {}

  ngOnInit(): void {}

  activarRegion(region: string) {
    if (this.regionActiva === region) {
      return;
    }
    this.regionActiva = region;
    this.paises = [];

    this.paisService.buscarRegion(this.regionActiva).subscribe((paises) => {
      this.paises = paises;
    });
  }
}
