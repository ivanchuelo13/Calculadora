import { Component } from '@angular/core';
import { Alert } from 'selenium-webdriver';
import { isUndefined } from 'util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Calculadora OP';
  Numero1: number;
  Numero2: number;
  result: number;
  modulus: number;
  bloquer = false;

  suma() {
    if (this.Numero1 == undefined) {
      alert("Escriba el otro Numero Porfavor")
    } else {
      if (this.Numero2 == undefined) {
        alert("Escriba el otro Numero Porfavor")
      } else {
        this.result = this.Numero1 + this.Numero2;
      }
    }
  }

  rest() {
    if (this.Numero1 == undefined) {
      alert("Escriba el otro Numero Porfavor")
    } else {
      if (this.Numero2 == undefined) {
        alert("Escriba el otro Numero Porfavor")
      } else {
        this.result = this.Numero1 - this.Numero2;
      }
    }
  }

  multi() {
    if (this.Numero1 == undefined) {
      alert("Escriba el otro Numero Porfavor")
    } else {
      if (this.Numero2 == undefined) {
        alert("Escriba el otro Numero Porfavor")
      } else {
        this.result = this.Numero1 * this.Numero2;
      }
    }
  }

  divi() {
    if (this.Numero1 == undefined) {
      alert("Escriba el otro Numero Porfavor")
    } else {
      if (this.Numero2 == undefined) {
        alert("Escriba el otro Numero Porfavor")
      } else {
        if (this.Numero2 == 0) {
          alert("No se puede dividir por 0")
        } else {
          this.result = this.Numero1 / this.Numero2;
          this.result != 0;
          this.modulus = this.Numero1 % this.Numero2;
        }
      }
    }
  }

  Limpiar() {
    this.Numero1 = undefined;
    this.Numero2 = undefined;
    this.result = undefined;
    this.modulus = undefined;
  }
}
