import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  ngOnInit(): void {
    this.alertaMensagem();
  }

  alertaMensagem() {

    alert("Função desabilita!")
  }
}
