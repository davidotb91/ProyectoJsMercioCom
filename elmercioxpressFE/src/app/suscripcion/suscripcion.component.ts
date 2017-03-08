import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Response, Http} from "@angular/http";
import {MasterURLService} from "../services/master-url.service";

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.css']
})
export class SuscripcionComponent implements OnInit {
  title: string = "Ingresa las suscripciones";

  private _parametros:any;
  suscripciones = [];
  nuevaSuscripcion = {};

  disabledButtons = {
    NuevaSuscripcionFormSubmitButton: false
  };
  constructor(private _ActivatedRoute: ActivatedRoute,
              private _http:Http,
              private _masterURL:MasterURLService) { }

  ngOnInit() {
    this._ActivatedRoute
      .params
      .subscribe(parametros => {
        this._parametros = parametros;
        this._http.get(this._masterURL.url+'/suscripcion?idCliente='+this._parametros.idCliente)
          .subscribe(
            (res:Response)=>{
              this.suscripciones = res.json()
                .map((value) => {
                  value.formularioCerrado = true;
                  return value;
                });
            },
            (err)=>{
              console.log(err)
            }
          )
      });
  }
  crearSuscripcion(formulario){
    this.disabledButtons.NuevaSuscripcionFormSubmitButton = true;
    console.log(formulario);

    let suscripcion = {
      tipoSuscripcion: formulario.value.tipoSuscripcion,
      fechaSuscripcion: formulario.value.fechaSuscripcion,
      costoSuscripcion: formulario.value.costoSuscripcion,
      idCliente:this._parametros.idCliente
    };

    this._http.post(this._masterURL.url+"/suscripcion", suscripcion)
      .subscribe(
        (res:Response)=>{
          this.suscripciones.push(res.json());
          this.nuevaSuscripcion = {};
          this.disabledButtons.NuevaSuscripcionFormSubmitButton = false;
        },
        (err)=>{
          this.disabledButtons.NuevaSuscripcionFormSubmitButton = false;
          console.log("Ocurrio un error", err);
        }
      )
  }

  borrarSuscripcion(id: number) {
    this._http.delete(this._masterURL.url + "/suscripcion/" + id)
      .subscribe(
        (res) => {
          let suscripcionBorrado = res.json();
          this.suscripciones = this.suscripciones.filter(value => suscripcionBorrado.id != value.id);
        },
        (err) => {
          console.log("Ocurrio un error", err);
        }
      )
  }

  editarSuscripcion(suscripcion: any, id:number) {
    let parametos = {
      tipoSuscripcion: suscripcion.tipoSuscripcion,
      fechaSuscripcion: suscripcion.fechaSuscripcion,
      costoSuscripcion: suscripcion.costoSuscripcion
    };
    this._http.put(this._masterURL.url + "/suscripcion/" + suscripcion.id, parametos)
      .subscribe(
        (res: Response) => {
          suscripcion.formularioCerrado = !suscripcion.formularioCerrado;
          console.log("Respuesta:", res.json());
        },
        (err) => {
          console.log("Error:", err);
        }
      )
  }

}
