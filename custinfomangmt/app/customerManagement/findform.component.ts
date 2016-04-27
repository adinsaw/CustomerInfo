import {Component, OnInit, Input, Output, EventEmitter, ForwardRefFn} from 'angular2/core';
import {Customer} from './customerform';
import {CustomerTransaction} from './customerTransaction';
import {NgForm} from 'angular2/common';
import {HTTP_PROVIDERS, Http}    from 'angular2/http';
import {CustomerFormService} from './customerform.service';
import {CustomerTransactionComponent} from './customertransaction.component';
import {Status} from './status';
import {RouteParams, Router, RouteConfig, ROUTER_DIRECTIVES, RouterOutlet, RouteData} from 'angular2/router';
import {CurrentCustomerService} from './currentcustomer.service';

import {Subscription}   from 'rxjs/Subscription';

@Component({

    selector: 'findCustomer',
    templateUrl: 'app/customerManagement/findform.html',

    providers: [
        HTTP_PROVIDERS,
        CustomerFormService,
        CurrentCustomerService
    ],

    directives: [ROUTER_DIRECTIVES, CustomerTransactionComponent]

})
export class FindFormComponent implements OnInit {
    modelTransaction: CustomerTransaction;
    @Output() selectedChange: EventEmitter<Customer> = new EventEmitter();
    specificTransactionUpdate = false;
    edit = false;
    parentModel = new Customer('');
    transactionEdit = false;
    status: Status;
    model = new Customer('ADAM', 'SMITH');
    _selectedId: number;
    customer: Customer[];
    selectedCustomer: Customer;
    displayData:string;
    subscription:Subscription;
    constructor(public _customerformservice: CustomerFormService, protected _router: Router, public _currentcustomerservice: CurrentCustomerService) {
     this._currentcustomerservice.firstName$.subscribe( displayData => {this.displayData = displayData;})
        console.log(this.displayData);
        this._currentcustomerservice.announcefirstName("TEST");
    
   
    }


    ngOnInit() {
        //   this.getCustomerDetails(); 
    }

    getCustomerByFirstLastName(findcustomer: Customer) {
        this._customerformservice.findCustomerByFirstLastName(findcustomer)
            .subscribe(
            customer => this.customer = customer
            //    .do(data => console.log(data))
            );


    }



    response(customer: Customer[]) {
        console.log(customer);
    }

    onSelect(customer: Customer) {
        this.model = customer; console.log(this.model);

        this.edit = true;
        //@RouteConfig([     {path:'/updatecustomer', name: 'UpdateCustomer', component:CustomerFormComponent} ])


    }
    onSelectTransactionUpdate(customerTransaction: CustomerTransaction) {
        this.modelTransaction = customerTransaction;
        this.specificTransactionUpdate = true;
    }

    onSelectTransaction() { this.transactionEdit = true; }

    onSelectYES(newcustomer: Customer) {

        this.transactionEdit = true;

    //    this._currentcustomerservice.setCurrentCustomerDetails(newcustomer);
        
        
        this._router.navigate(['CustomerTransaction',{transactionEdit:newcustomer}]);
       
      console.log(this.displayData);

    }
    onSubmit() { console.log(this.model); this.getCustomerByFirstLastName(this.model); }
    //onEdit(customerReq:Customer){console.log(this.payload);}
    onUpdate() {
        this._customerformservice.postUpdateCustomer(this.model)

            .subscribe(

            data => this.loggedIn(data)


            //    .do(data => console.log(data))
            );
    }

    
    loggedIn(data: Status): void {
        alert(data); console.log(data.statusCode); this.edit = false;
        this.model = new Customer('ADAM', 'SMITH');
    }
}
