import { Component, OnInit, Input } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-grafica-donut',
  templateUrl: './grafica-donut.component.html',
  styles: []
})
export class GraficaDonutComponent implements OnInit {

 public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
 public doughnutChartData: number[] = [350, 450, 100];
 public doughnutChartType: string = 'doughnut';
 public leyenda: string = 'Soy Leyenda';

 @Input() public graficos: any;

  constructor() { }

  ngOnInit() {
    this.crearGrafico(this.graficos);
  }

  crearGrafico (graficos) {
    // console.log(graficos);

    this.doughnutChartLabels = graficos.labels;
    this.doughnutChartData = graficos.data;
    this.doughnutChartType = graficos.type;

    this.leyenda = graficos.leyenda;

  }

}
