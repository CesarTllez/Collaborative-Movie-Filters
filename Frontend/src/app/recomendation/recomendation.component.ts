import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PeliculaService } from 'src/_services/pelicula.service';
import { RatingService } from 'src/_services/raiting.service';

@Component({
  selector: 'app-recomendation',
  templateUrl: './recomendation.component.html',
  styleUrls: ['./recomendation.component.css']
})
export class RecomendationComponent implements OnInit {

  displayedColumns: string[] = ['movieId', 'title', 'weightedAverage'];
  dataSource = new MatTableDataSource<any>();
@ViewChild(MatPaginator) paginator!: MatPaginator;

  listaRecomendacion: any;

  constructor(
    private raitingService: RatingService,
    private peliculaSrvice: PeliculaService
  ) { }

  ngOnInit(): void {
    this.raitingService.obtener().subscribe(
      data => {
        this.listaRecomendacion = data;
        this.dataSource = new MatTableDataSource(data);
        console.log(data)
        this.dataSource.paginator = this.paginator;
      },
      error =>{
        console.log(error);
      }
    )
  }

}
