import {Component, OnInit} from 'angular2/core';
import {Customer} from './customerform';
import {NgForm} from 'angular2/common';
import {HTTP_PROVIDERS, Http}    from 'angular2/http';
import {CustomerFormService} from './customerform.service';
import {Router, RouteConfig, ROUTER_DIRECTIVES, RouterOutlet} from 'angular2/router';
import {Status} from './status';
import {CustomerManagementComponent} from './customermanagement';
import {CustomerTransaction} from './customertransaction';
import {CustomerProductInformation} from './customerproductinformation';
@Component({
    selector: 'customer-form',
    templateUrl: 'app/customerManagement/customerform.html',
    providers: [
        HTTP_PROVIDERS,
        CustomerFormService
    ],

    directives: [ROUTER_DIRECTIVES]
})

export class CustomerFormComponent implements OnInit {
    customer: Customer[];
  modelTransactionProduct=new CustomerProductInformation("");
    modelTransaction=new CustomerTransaction('Enter date',this.modelTransactionProduct);
   
    model = new Customer('', '','','','','','','','','',this.modelTransaction);
    isNewTransaction=false;
   
public router:Router;
    active=true;
    constructor(public _customerformservice: CustomerFormService) {
        
      
    }

    ngOnInit() {
        //   this.getCustomerDetails(); 
    }
    getCustomerDetails() {
        this._customerformservice.getAllCustomers()
            .subscribe(

            customer => { this.customer = customer; }
            //    .do(data => console.log(data))
            );

    }
    
    postCreateCustomer(customer: Customer) {
        console.log(customer);
        this._customerformservice.createNewCustomer(customer)
            .subscribe(
           
           data=>this.loggedIn(data)     
         
                
            //    .do(data => console.log(data))
            );

    }
 
     newCustomer(){
         this.model= new Customer('', '','','','','','','','','',this.modelTransaction);
         this.active=true;
         this.isNewTransaction=false;
         
    }
    loggedIn(data:Status): void {
        alert(data);
   

        console.log(data);
     //   if(data===200){alert(data);this.newCustomer();}
        //if(!(data.statusCode==200)){alert(data);alert("check the data");}
        //else{alert(data+"FGSDFGDGDS");this.model;}
       // console.log(data+"");
 
    }
    submitted = false;
    onSubmit() {console.log(this.model); this.postCreateCustomer(this.model); }

newTransaction(){this.isNewTransaction=true;}
}
