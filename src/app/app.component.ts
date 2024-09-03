import { Component } from '@angular/core';
import { ServiceService } from './mat-table-custom/service.service';
import { MatTableDataSource } from '@angular/material/table';
import { delay } from 'rxjs';

export interface PeriodicElement {

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isprogress: boolean = false;

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
    this.isprogress = true;
    this.dataService.getData()
      .subscribe(data => {
        console.log("Here");
        this.dataBuffer = this.dataBuffer.concat(data);
        this.totalLength = this.dataBuffer.length;
        this.dataSource.data = this.dataBuffer;
        this.currentOffset += this.limit;
        this.isprogress = false;
      });
  }
}
