import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerObservable } from 'rxjs/observable/TimerObservable';
import 'rxjs/add/operator/takeWhile';

import { AppService } from './app.service';
import { IStockData } from './models/IStockData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private alive: boolean;
  private interval: number;

  public loaded = false;
  public barChartLabels: string[];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartData: any[] = [{ data: [] }];

  constructor(private _appService: AppService) {
    this.alive = true;
    this.interval = 6000;
  }

  ngOnInit(): void {
    TimerObservable.create(0, this.interval)
      .takeWhile(() => this.alive)
      .subscribe(() =>
        this._appService.getGraph()
          .subscribe(
            (result: IStockData) => {
              this.barChartData = [{
                data: result['data'],
                label: `Stock #1 (refreshes every ${Math.floor(this.interval / 1000)} seconds)`
              }];
              this.barChartLabels = result['labels'];
              this.loaded = true;
            }
          )
      );


  }

  ngOnDestroy() {
    this.alive = false;
  }

}
