import { Cell } from './../models/cell';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { } from 'firebase/app';


export class HomePage implements OnInit {

  public cells: Cell[] = [];
  private cell: Cell = new Cell();
  private cell2: Cell = new Cell();
  private cell3: Cell = new Cell();
  private cell4: Cell = new Cell();
  private cell5: Cell = new Cell();
  private cell6: Cell = new Cell();

  constructor(private router: Router) { }

  public ngOnInit(): void {
    this.mockListCell();
  }

  public mockListCell(): void {
    this.cell.title = 'Célula 01';
    this.cell.dateEvent = 'Dia 20/10/2020';
    this.cell.facilitatorName = 'André Santos';
    this.cell.status = 'c';

    this.cell2.title = 'Célula 02';
    this.cell2.dateEvent = 'Dia 21/10/2020';
    this.cell2.facilitatorName = 'Luis Santos';
    this.cell2.status = 'p';

    this.cell3.title = 'Célula 03';
    this.cell3.dateEvent = 'Dia 22/10/2020';
    this.cell3.facilitatorName = 'Fernando Santos';
    this.cell3.status = 'p';

    this.cell4.title = 'Célula 04';
    this.cell4.dateEvent = 'Dia 23/10/2020';
    this.cell4.facilitatorName = 'Fernando Santos';
    this.cell4.status = 'p';

    this.cell5.title = 'Célula 05';
    this.cell5.dateEvent = 'Dia 24/10/2020';
    this.cell5.facilitatorName = 'Fernando Santos';
    this.cell5.status = 'p';

    this.cell6.title = 'Célula 06';
    this.cell6.dateEvent = 'Dia 25/10/2020';
    this.cell6.facilitatorName = 'Fernando Santos';
    this.cell6.status = 'p';

    this.cells.push(this.cell, this.cell2, this.cell3, this.cell4, this.cell5, this.cell6);
  }

  public onClickViewDetail(): void {
    this.router.navigate(['/cell-detail']);
  }

}
