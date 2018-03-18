import { fakeAsync, inject, TestBed } from '@angular/core/testing';
import {
    HttpModule,
    XHRBackend,
    ResponseOptions,
    Response,
    RequestMethod
} from '@angular/http';

import { AppService } from './app.service';

const mockResponse = { };

describe('AppService', () => {
    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                AppService
            ],
            providers: [AppService]
        }).compileComponents();
    }));
    it('should create the app', fakeAsync(() => {
    }));
});
