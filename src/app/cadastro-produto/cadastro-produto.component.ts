import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.css']
})
export class CadastroProdutoComponent implements OnInit {
    computadores: any = [];
    flag = false;

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('computadores')) this.computadores = JSON.parse(localStorage.getItem('computadores'));
  }

  onSubmit(form){
    if(
      form.value.marca == undefined ||
      form.value.modelo == undefined ||
      form.value.mobo == undefined || 
      form.value.ram == undefined || 
      form.value.hdTamanho == undefined ||
      form.value.hdMarca == undefined || 
      form.value.cpu == undefined || 
      form.value.veloCpu == undefined || 
      form.value.foto == undefined
    ){
      this.flag = true;
    }else{
      this.flag = false;
      this.computadores.push(form.value);
      localStorage.setItem('computadores', JSON.stringify(this.computadores));
    }
  }
}
