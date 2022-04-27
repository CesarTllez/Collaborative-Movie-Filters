import { Component, OnInit, ViewChild } from '@angular/core';
import { PeliculaService } from 'src/_services/pelicula.service';

import { MatTableDataSource } from '@angular/material/table';
import { RatingService } from 'src/_services/raiting.service';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['title', 'rating'];
  dataSource = new MatTableDataSource<any>();


@ViewChild(MatPaginator) paginator!: MatPaginator;

  listaPeliculas: any;
  value!: number;

  constructor(
    private peliService: PeliculaService,
    private ratingService: RatingService
  ) {}

  ngOnInit(): void {
    this.peliService.obtener().subscribe(
      data => {
        this.listaPeliculas = data;
        this.dataSource = new MatTableDataSource(data);
        console.log(data)
        this.dataSource.paginator = this.paginator;
      },

      error => {
        console.log(error);
      }

    )
  }

  setRating(rating: any){
    this.ratingService.addRating(rating.movieId, rating.title, this.value).subscribe(
      response => {
        console.log(response)
        this.value = 0;
      },
      error => {
        console.log(error)
      }
    );
  }

}
