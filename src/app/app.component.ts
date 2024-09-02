import { Component } from '@angular/core';
import { ServiceService } from './mat-table-custom/service.service';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  private dataBuffer: any[] = [];
  private currentOffset = 0;
  private limit = 30000;
  public totalLength = 100000;

  constructor(public dataService: ServiceService) { }
  dataSource = new MatTableDataSource<PeriodicElement>([]);

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.dataService.getData()
      .subscribe(data => {
        this.dataBuffer = this.dataBuffer.concat(data);
        this.dataSource.data = this.dataBuffer;
        this.currentOffset += this.limit;
      });
  }

}
