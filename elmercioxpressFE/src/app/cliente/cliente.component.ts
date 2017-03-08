import { Component, OnInit } from '@angular/core';
import {MasterURLService} from "../services/master-url.service";
import {Response, Http} from "@angular/http";
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  title: string = "Aquí ingresar datos del cliente";
  nuevoCliente= {};
  clientes = [];
  disabledButtons = {
    NuevoClienteFormSubmitButton: false
  };

  constructor(private _http: Http,
              private _masterURL: MasterURLService
  ) { }

  ngOnInit() {
    this._http.get(this._masterURL.url + "/cliente")
      .subscribe(
        (res: Response) => {
          this.clientes = res.json()
            .map((value) => {
              value.formularioCerrado = true;
              return value;
            });
        },
        (err) => {
          console.log(err);
        }
      )

  }
  crearCliente(formulario) {
    this.disabledButtons.NuevoClienteFormSubmitButton = true;
    console.log(formulario);

    let cliente = {
      nombreCliente: formulario.value.nombreCliente,
      conjuntoCliente: formulario.value.conjuntoCliente,
      numCasaCliente: formulario.value.numCasaCliente
    };

    this._http.post(this._masterURL.url + "/cliente", cliente)
      .subscribe(
        (res) => {
          console.log("No hubo Errores");
          console.log(res);
          this.clientes.push(res.json());
          this.nuevoCliente = {};
          this.disabledButtons.NuevoClienteFormSubmitButton = false;
        },
        (err) => {
          this.disabledButtons.NuevoClienteFormSubmitButton = false;
          console.log("Ocurrio un error", err);
        }
      );
  }
  borrarCliente(id: number) {
    this._http.delete(this._masterURL.url + "/cliente/" + id)
      .subscribe(
        (res) => {
          let clienteBorrado = res.json();
          this.clientes = this.clientes.filter(value => clienteBorrado.id != value.id);
        },
        (err) => {
          console.log("Ocurrio un error", err);
        }
      )
  }

  editarCliente(cliente: any) {
    let parametos = {
      nombreCliente: cliente.nombreCliente,
      conjuntoCliente: cliente.conjuntoCliente,
      numCasaCliente: cliente.numCasaCliente
    };

    this._http.put(this._masterURL.url + "/cliente/" + cliente.id, parametos)
      .subscribe(
        (res: Response) => {
          cliente.formularioCerrado = !cliente.formularioCerrado;
          console.log("Respuesta:", res.json());
        },
        (err) => {
          console.log("Error:", err);
        }
      )
  }
}
