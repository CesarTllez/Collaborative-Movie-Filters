import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRecomendationComponent } from './table-recomendation.component';

describe('TableRecomendationComponent', () => {
  let component: TableRecomendationComponent;
  let fixture: ComponentFixture<TableRecomendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRecomendationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableRecomendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
