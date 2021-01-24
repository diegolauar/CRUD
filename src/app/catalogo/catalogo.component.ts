import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  key: number = 0;
  recebeComputador = [];
  arrayFiltro = [];
  busca: string;

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('computadores')) this.recebeComputador = JSON.parse(localStorage.getItem('computadores'));
  }
  filtra(){
    this.recebeComputador = JSON.parse(localStorage.getItem('computadores'));
    this.arrayFiltro = this.recebeComputador.filter((obj) => {
      return obj.marca.toLowerCase() === this.busca;
    });
    if(this.arrayFiltro.length > 0){
      this.recebeComputador = this.arrayFiltro;
    }
  }
  exclui(index){
    this.recebeComputador.splice(index, 1);
    localStorage.setItem('computadores', JSON.stringify(this.recebeComputador));
    document.getElementById('popup').style.display = 'none';
  }
  fechaPop(index){
    document.getElementById('popup').style.display = 'none';
  }
  detalhes(index){
    this.key = index;
    document.getElementById('popup').style.display = 'block';
  }
}
