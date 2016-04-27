import {Component, OnInit} from 'angular2/core';
import {Customer} from './customerform';
import {NgForm} from 'angular2/common';
import {HTTP_PROVIDERS, Http}    from 'angular2/http';
import {CustomerFormService} from './customerform.service';
import {Status} from './status';
import {Router, RouteConfig, ROUTER_DIRECTIVES, RouterOutlet} from 'angular2/router';



@Component({

    selector: 'findCustomer',
    templateUrl: 'app/customerManagement/deletecustomer.html',

    providers: [
        HTTP_PROVIDERS,
        CustomerFormService
    ],

    directives: [ROUTER_DIRECTIVES]
})
export class DeleteCustomerFormComponent implements OnInit {
    edit = false;
   
    model = new Customer('ADAM', 'SMITH');
    customer: Customer[];
    selectedCustomer: Customer;
    constructor(public _customerformservice: CustomerFormService) { }

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

    onSubmit() { console.log(this.model); this.getCustomerByFirstLastName(this.model); }
    //onEdit(customerReq:Customer){console.log(this.payload);}
    onDelete() {
        this._customerformservice.postDeleteCustomer(this.model)
       
            .subscribe(

            data => this.loggedIn(data)


            //    .do(data => console.log(data))
            );}
        loggedIn(data:Status): void {
            alert(data);
            console.log(data.statusCode);
            this.edit = false;
            this.model=new Customer('ADAM','SMITH');
        }
    }
