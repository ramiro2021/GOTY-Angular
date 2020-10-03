import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent {

  @Input() results: any[] = [];

  // results: any[] = [
  //   {
  //     'name': 'JUEGO 1',
  //     'value': 50
  //   },
  //   {
  //     'name': 'JUEGO 2',
  //     'value': 25
  //   },
  //   {
  //     'name': 'JUEGO 3',
  //     'value': 15
  //   },
  //   {
  //     'name': 'JUEGO 4',
  //     'value': 35
  //   }
  // ];


  // view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  constructor() {

  }


  onSelect(event) {
    console.log(event);
  }

}
