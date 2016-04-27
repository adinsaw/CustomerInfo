import {Injectable} from 'angular2/core';
import {Http,Response,Headers, RequestOptions} from 'angular2/http';
import {Customer} from './customerform';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class CustomerFormService{
constructor(private http:Http)    
{
    }
   private _customerformUrl='http://localhost:8080/customerInfoManagement';
  private _customerformUrl1='app/customerManagement/customerform.json';
  
   public postUpdateCustomer(customer:Customer):Observable<any>
    { 
       
   let body=JSON.stringify({customer});
        
        console.log(body);
        let headers=new Headers();
        headers.append('content-type','application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this._customerformUrl+'/updatecustomer',body,options)
            .map(res => res.text())
      //  .do(data => console.log(data))
        }
   
   public postDeleteCustomer(customer:Customer):Observable<any>
    { 
       
   let body=JSON.stringify({customer});
        
        console.log(body);
        let headers=new Headers();
        headers.append('content-type','application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this._customerformUrl+'/deletecustomer',body,options)
            .map(res => res.text())
      //  .do(data => console.log(data))
        }
    
    
  
   public findCustomerByFirstLastName(customer:Customer):Observable<Customer[]>
    {
    
       return this.http.get(this._customerformUrl+'/findcustomerbyfirstlastname/'+customer.firstName+"&"+customer.lastName)
                              .map((res:Response) => res.json())
                  .do(data => console.log(data)) // eyeball results in the console
                  
   }
    
    public createNewCustomer(customer:Customer):Observable<any>
    { 
       
   let body=JSON.stringify({customer});
        
        console.log(body);
        let headers=new Headers();
        headers.append('content-type','application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this._customerformUrl+'/createcustomer',body,options)
            .map(res => res.text())
      //  .do(data => console.log(data))
        }
  
    
 
    
    public getAllCustomers():Observable<Customer[]> 
    {
          return this.http.get(this._customerformUrl+'/findallcustomers')
          // .map(res => res.text())  
              
        .map((res:Response) => res.json())
                  .do(data => console.log(data)) // eyeball results in the console
                  
  }
   
private handleError (error: Response) {
    // in a real world app, we may send the error to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
 

}