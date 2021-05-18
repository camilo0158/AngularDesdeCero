import { Country } from './../../interfaces/pais.interface';
import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-paisn',
  templateUrl: './ver-paisn.component.html',
  styles: [],
})
export class VerPaisnComponent implements OnInit {
  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(
        switchMap((params) => this.paisService.getPaisPorAlpha(params.id)),
        tap(console.log)
      )
      .subscribe((pais) => {
        this.pais = pais;
      });
  }
}
