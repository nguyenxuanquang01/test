import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {

}

@Component({
  selector: 'app-mat-table-custom',
  templateUrl: './mat-table-custom.component.html',
  styleUrls: ['./mat-table-custom.component.css']
})
export class MatTableCustomComponent implements OnInit {
  @Input() displayedColumns: string[] = [];
  @Input() totalLength: number | undefined;
  @Input() dataSource = new MatTableDataSource<PeriodicElement>();
  dataBuffer: PeriodicElement[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  page_size: number = 5;
  page_Index: number = 0;

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.length = this.totalLength;
    // }
  }
  constructor() { }


  ngOnInit() {
    this.dataBuffer = this.dataSource.data;
    const startIndex = 0;
    const endIndex = 5;
    const paginatedData = this.dataBuffer.slice(startIndex, endIndex);
    this.dataSource.data = paginatedData;
  }


  ngOnChanges(changes: SimpleChanges) {
    if (changes['dataSource'] && this.paginator) {
      this.paginator.length = this.totalLength; // Update paginator length
    }
  }

  onPageChange(event: PageEvent) {
    this.page_size = event.pageSize;
    this.page_Index = event.pageIndex;
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    const paginatedData = this.dataBuffer.slice(startIndex, endIndex);
    this.dataSource.data = paginatedData;
    // if (endIndex > 10) {
    //   this.paginator.length = 100;
    //   // Fetch more data
    // }
    // Handle page change logic here if necessary
  }

}
