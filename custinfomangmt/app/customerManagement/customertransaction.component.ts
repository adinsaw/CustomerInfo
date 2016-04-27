import {Component, OnInit, Input} from 'angular2/core';
import {Customer} from './customerform';
import {CustomerTransaction} from './customerTransaction';
import {NgForm} from 'angular2/common';
import {HTTP_PROVIDERS, Http}    from 'angular2/http';
import {CustomerFormService} from './customerform.service';
import {Status} from './status';
import {CurrentCustomerService} from './currentcustomer.service';
import {RouteParams, Router, RouteConfig, ROUTER_DIRECTIVES, RouterOutlet} from 'angular2/router';
import {FindFormComponent} from './findform.component';
import {CustomerProductInformation} from './customerproductinformation';
@Component({

    selector: 'customer-transaction',
    templateUrl: 'app/customerManagement/customertransaction.html',
    inputs: ['modelChange'],
    providers: [
        HTTP_PROVIDERS,
        CustomerFormService,
        CurrentCustomerService

    ],

    directives: [ROUTER_DIRECTIVES]


})
export class CustomerTransactionComponent {

    @Input() modelChange: Customer;
    
    noTransaction=false;
    goBack=false;
  
    transactionEdit = false;
    selectedCustomer: Customer;
    model: Customer;
    modelTransaction: CustomerTransaction;
    selectedProduct: CustomerProductInformation;
   
    productDetails = false;
    displayData:string;
    newModelTransaction=new CustomerTransaction('');
    constructor(public _routeParams: RouteParams, public _customerformservice: CustomerFormService, private _router: Router,public _currentcustomerservice:CurrentCustomerService) {
       
        this._currentcustomerservice.announcefirstName("AAA");
      this._currentcustomerservice.firstName$.subscribe( displayData => {this.displayData = displayData;})
   
 
    }
    ngOnInit(){
    this.model = this._routeParams.get("transactionEdit");
        if(this.model==null){this.noTransaction=true;}
        
   }
    onSelectTransactionDetails(customertransaction: CustomerTransaction) {
        this.transactionEdit = true;
        this.modelTransaction = customertransaction;
        //console.log(customertransaction);
    }
    productDetail(cusP: CustomerProductInformation) {
        this.productDetails = true;
        this.selectedProduct = cusP;
    }


    onUpdate123() {
        console.log(this.model);
        this._customerformservice.postUpdateCustomer(this.model)

            .subscribe(

            data => this.loggedIn(data)


            //    .do(data => console.log(data))
            );
    }


    loggedIn(data: Status): void {
        alert(data);

        this._router.navigate(['FindCustomer']);

    }

onGoBack(){this.transactionEdit=false;}


}

