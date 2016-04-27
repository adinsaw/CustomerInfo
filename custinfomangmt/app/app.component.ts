    import {Component} from 'angular2/core';
    import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
   import {DeleteCustomerFormComponent} from './customerManagement/deletecustomer.component';
    import {CustomerFormComponent} from './customerManagement/customerform.component';
    import {FindFormComponent} from './customerManagement/findform.component';
    import {CustomerManagementComponent} from './customerManagement/customermanagement';
import {CustomerTransactionComponent} from './customerManagement/customertransaction.component';
import {Customer} from './customerManagement/customerform';
    @Component({
      selector: 'my-app',
      template: `<a>Customer Information Management</a>
 
        <nav>
    <a><h3>List Of Operations</h3></a>
<br>     <a [routerLink]="['Home']">Home</a>
<br>
<br><br>          <a [routerLink]="['CreateCustomer']">Create Customer Info</a>
          <br>

            <a [routerLink]="['FindCustomer']">Find/Update Customer Info</a>
          <br>
            <a [routerLink]="['DeleteCustomer']">Delete Customer Info</a>
        
        </nav>
        <router-outlet></router-outlet>
      `,
      directives: [ROUTER_DIRECTIVES,CustomerTransactionComponent]
      
    })
    @RouteConfig([
      {path:'/home', name: 'Home', component:CustomerManagementComponent, useAsDefault: true},
       
      {path:'/customerform', name: 'CreateCustomer', component: CustomerFormComponent},
      {path:'/findCustomer', name: 'FindCustomer',   component: FindFormComponent},
       {path:'/deleteCustomer',name: 'DeleteCustomer', component: DeleteCustomerFormComponent},
       {path:'/transactionDetails:transactionEdit',name: 'CustomerTransaction', component: CustomerTransactionComponent}
 
       ])
        
    export class AppComponent { }