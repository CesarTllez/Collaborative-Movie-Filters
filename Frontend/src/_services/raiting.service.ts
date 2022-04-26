
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';



/**
 * Método sobreescrito de la clase Injectable
 */
 @Injectable({
    providedIn: 'root'
  })
  export class RatingService{

    /**
   * Almacena la ruta de la petición.
   */


  constructor( private http: HttpClient) { }


  obtener(){
    return this.http.get<any>(`${environment.URL}/suggestions`)
  }

  addRating(movieId: number, title: string, rating: number){
    let ratingJson = {
      'movieId': movieId,
      'title': title,
      'rating': rating
    }
    return this.http.post<any>(`${environment.URL}/new`, ratingJson)
  }

  }
