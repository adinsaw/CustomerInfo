    import {AppComponent}     from './app.component';
    import {bootstrap}        from 'angular2/platform/browser';
    import {ROUTER_PROVIDERS} from 'angular2/router';
import {CurrentCustomerService} from './customerManagement/currentcustomer.service'; 
import {HTTP_PROVIDERS} from 'angular2/http';
import { provide } from 'angular2/core';

//to define a common service bootstrap the service;
let _currentcustomerservice = new CurrentCustomerService()
bootstrap(AppComponent, [
      ROUTER_PROVIDERS,HTTP_PROVIDERS,provide(CurrentCustomerService, {useValue: _currentcustomerservice})
    ]);



