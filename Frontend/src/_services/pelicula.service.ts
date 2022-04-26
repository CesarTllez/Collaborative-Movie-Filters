
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';



/**
 * Método sobreescrito de la clase Injectable
 */
 @Injectable({
    providedIn: 'root'
  })
  export class PeliculaService{

    /**
   * Almacena la ruta de la petición.
   */


  constructor( private http: HttpClient) { }


  obtener(){
    return this.http.get<any>(`${environment.URL}/showMovies`)
  }

  }
  