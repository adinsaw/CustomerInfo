package com.customer.main;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import com.customer.config.Status;

import javax.ws.rs.core.MediaType;

import com.customer.entity.Customer;
import com.customer.repo.CustomerRepository;
import com.fasterxml.jackson.annotation.JsonRootName;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

@Path("/customerInfoManagement")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)

public class CustomerController {

public static Gson gson=new Gson();	
public static ObjectMapper objectMapper = new ObjectMapper();

Status status=new Status();


 public CustomerController()

{
	 CustomerRepository cusRepo=new CustomerRepository();
	if(cusRepo.findAllCustomers().isEmpty())
	{DataInsersion.initializeData();}
	cusRepo.closeCompleteConnection();
}

@Path("/hello")
@GET
public String hello()
{
	return gson.toJson("able to run ");
}

@Path("/findallcustomers")
@GET
public String findCustomers()
{	CustomerRepository cusRepo=new CustomerRepository();

	return gson.toJson(cusRepo.findAllCustomers());
}


/*--UPDATE--*/
@Path("/updatecustomer")
@POST
@Consumes(MediaType.APPLICATION_JSON)

public String updateCustomer(String customerStr) throws JsonParseException, JsonProcessingException, IOException
{CustomerRepository updateTransaction=new CustomerRepository();
	

int stat;
objectMapper.configure(DeserializationFeature.UNWRAP_ROOT_VALUE, true);
Customer rootObj=objectMapper.readValue(customerStr,Customer.class);
stat=updateTransaction.updateCustomerDetails(rootObj);
updateTransaction.closeCompleteConnection();

if(stat==200){ return gson.toJson(new Status(200,"successful"));}else{return gson.toJson(new Status(400,"Failure"));}
}

/*--DELETE--*/
@Path("/deletecustomer")
@POST
@Consumes(MediaType.APPLICATION_JSON)
public String deleteCustomer(String customerStr)
{CustomerRepository updateTransaction=new CustomerRepository();
	int status;

String response=null;
System.out.println("Input Data is "+customerStr);
JsonParser parser = new JsonParser();
JsonObject rootObj = parser.parse(customerStr).getAsJsonObject();


Customer customer=gson.fromJson(((JsonObject)rootObj.get("customer")),Customer.class);
System.out.println("DATA IS :"+customer.getFirstName());	
	status=updateTransaction.deleteCustomerDetails(customer);
	if(status==200){ response=gson.toJson(new Status(200,"successful"));}else{response=gson.toJson(new Status(200,"Failure"));}
	
	updateTransaction.closeCompleteConnection();
	return response;
}

/*==create--*/

@Path("/createcustomer")
@POST
@Consumes(MediaType.APPLICATION_JSON)
public String createCustomer(String customerStr) throws JsonParseException, JsonMappingException, IOException
{CustomerRepository createTransaction=new CustomerRepository();


int stat;
objectMapper.configure(DeserializationFeature.UNWRAP_ROOT_VALUE, true);
Customer rootObj=objectMapper.readValue(customerStr,Customer.class);
stat=createTransaction.createCustomerDetails(rootObj);
createTransaction.closeCompleteConnection();

if(stat==200){ return gson.toJson(new Status(200,"successful"));}else{return gson.toJson(new Status(400,"Failure"));}
}

@Path("/findcustomer/{id}")
@GET
public String findCustomerById(@PathParam("id") long id)
{
	CustomerRepository cusRepo=new CustomerRepository();
	return gson.toJson(cusRepo.getCustomerDetailsById(id));
	
}

@Path("/findcustomerbyfirstlastname/{id1}&{id2}")
@GET
@Consumes(MediaType.APPLICATION_JSON)
public String findCustomerByFirstLastName(@PathParam("id1") String id,@PathParam("id2") String id2) throws JsonProcessingException

{ CustomerRepository cusRepo=new CustomerRepository();

	Customer customer =new Customer();
	customer.setFirstName(id);
	customer.setLastName(id2);
	//JsonParser parser = new JsonParser();
	//JsonObject rootObj = parser.parse(customerStr).getAsJsonObject();
	//Customer customer=gson.fromJson(((JsonObject)rootObj.get("customer")),Customer.class);
	System.out.println(cusRepo.getCustomerDetailsByFirstLastName(customer));
	
	String jsonInString = objectMapper.writeValueAsString(cusRepo.getCustomerDetailsByFirstLastName(customer));

	return jsonInString;
	//return gson.toJson(cusRepo.getCustomerDetailsByFirstLastName(customer));

}
}
	
	
	

