import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  constructor(private httpCliente: HttpClient){

  }
  busca(){
    return this.httpCliente.get(`https://brasilapi.com.br/api/cep/v1/38706336`).subscribe(
      res => console.log(res)
    )
  }
}
