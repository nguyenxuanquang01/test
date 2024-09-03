import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
export class MatTableCustomComponent implements OnChanges {
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


  // ngOnInit() {
  //   this.dataBuffer = this.dataSource.data;
  //   const startIndex = 0;
  //   const endIndex = 5;
  //   console.log(5);
  //   const paginatedData = this.dataBuffer.slice(startIndex, endIndex);
  //   this.dataSource.data = paginatedData;
  // }


  ngOnChanges(changes: SimpleChanges) {
    if (this.paginator) {
      this.paginator.length = this.totalLength; // Update paginator length
      console.log('paginator');

    }

    if (changes['totalLength']) {

      this.doSomethingAfterDataSourceUpdate();
    }
  }

  doSomethingAfterDataSourceUpdate() {
    console.log('Number of items in dataSource:', this.dataSource.data.length);
    const startIndex = 0;
    const endIndex = 5;
    //   this.dataSource.data = paginatedData;
    this.dataBuffer = this.dataSource.data.slice(startIndex, endIndex);;
  }

  onPageChange(event: PageEvent) {
    this.page_size = event.pageSize;
    this.page_Index = event.pageIndex;
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.dataBuffer = this.dataSource.data.slice(startIndex, endIndex);

    // if (endIndex > this.dataBuffer.length) {
    //   this.paginator.length = 100;
    //   // Fetch more data
    // }
    // Handle page change logic here if necessary
  }

}
