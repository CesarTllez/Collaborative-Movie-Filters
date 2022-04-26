import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { RatingService } from 'src/_services/raiting.service';

@Component({
  selector: 'app-table-recomendation',
  templateUrl: './table-recomendation.component.html',
  styleUrls: ['./table-recomendation.component.css']
})

export class TableRecomendationComponent implements OnInit {

  displayedColumns: string[] = ['movieId', 'weightedAverage'];

  dataSource = new MatTableDataSource<any>();

  
@ViewChild(MatPaginator) paginator!: MatPaginator;

  listaPeliculas: any;
  
  constructor(
    private ratService: RatingService
  ) { }

  ngOnInit(): void {
    this.ratService.obtener().subscribe(
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

}
