import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  test = '';

  constructor(private _appService: AppService) { }

  ngOnInit(): void {
    this._appService.getGraph()
      .subscribe(
        result => {
          this.test = result;
        }
      );
  }

}
