import { PaisService } from './../../services/pais.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-paisn',
  templateUrl: './ver-paisn.component.html',
  styles: [],
})
export class VerPaisnComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit() {
    this.activatedRoute.params
      .pipe(switchMap((params) => this.paisService.getPaisPorAlpha(params.id)))
      .subscribe((res) => {
        console.log(res);
      });

    // this.activatedRoute.params.subscribe((params) => {
    //   this.paisService.getPaisPorAlpha(params.id).subscribe((pais) => {
    //     console.log(pais);
    //   });
    // });
  }
}
