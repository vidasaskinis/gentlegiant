import { async, inject, TestBed } from '@angular/core/testing';
import {
  HttpModule,
  XHRBackend,
  ResponseOptions,
  Response,
  RequestMethod
} from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { AppService } from './app.service';
import { IStockData } from './models/StockData';


describe('AppService', () => {

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        AppService,
        {
          provide: XHRBackend,
          useClass: MockBackend
        }
      ]
    }).compileComponents();
  });

  it('should return Observable<IStockData>',
    inject([AppService, XHRBackend], (appService: AppService, mockBackend: MockBackend) => {

      const mockResponse = {
        data: {
          Labels: [
            '12:00',
            '12:10'
          ],
          Data: [
            10,
            50
          ]
        }
      };

      mockBackend.connections.subscribe((connection: any) => {
        connection.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify(mockResponse)
        })));
      });

      appService.getGraph().subscribe((response: IStockData) => {
        expect(response.Labels.length).toBe(2);
        expect(response.Labels[0]).toEqual('12:00');
        expect(response.Data.length).toBe(2);
        expect(response.Data[0]).toEqual(10);
      });
    }));
});
