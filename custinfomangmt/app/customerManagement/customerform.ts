import {CustomerTransaction} from './customertransaction';
export class Customer {
constructor(
    
public firstName:string,  
public lastName:string,
public middleName?:string,
public emailId?:string,
public phoneNumber?:number,
public houseNumber?:string,
public addressLine1?:string,
public addressLine2?:string,
public cityName?:string,
public pinCode?:number,
public customerId?:number,
public customerTransaction?:CustomerTransaction    
    )    {}



}