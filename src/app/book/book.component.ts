import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../types/Book';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceService } from '../mat-table-custom/service.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book = {} as Book;
  @Output() emitBook = new EventEmitter<Book>();

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  constructor(public dataService: ServiceService) { }
  dataSource = new MatTableDataSource<PeriodicElement>([]);
  ngOnInit(): void {
    // let data: PeriodicElement[] = this.dataService.getData();
    // this.dataSource = new MatTableDataSource<PeriodicElement>(data);
  }


}
