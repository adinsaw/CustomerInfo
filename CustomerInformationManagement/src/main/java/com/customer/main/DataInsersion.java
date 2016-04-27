package com.customer.main;

import com.customer.entity.Customer;
import com.customer.repo.CustomerRepository;

public class DataInsersion {

	public static void initializeData()
	{CustomerRepository cusRepo=new CustomerRepository();
			//create dummy data for customer obj
		Customer customerDetails=new Customer();
		customerDetails.setFirstName("ADAM");
		customerDetails.setLastName("SMITH");
		customerDetails.setEmailId("smith@yahoo.com");
		customerDetails.setAddressLine1("123 st");
		customerDetails.setPhoneNumber(504333444);
		cusRepo.createCustomerDetails(customerDetails);
		/*
		Customer findCustomerById=new Customer();
		
		findCustomerById.setCustomerId(1);
		cusRepo.deleteCustomerDetails(findCustomerById);
		//Customer deleteEntity=cusRepo.getCustomerDetailsById(findCustomerById).get(0);
		
	//	cusRepo.deleteCustomerDetails(deleteEntity);
		//findCustomerById.setFirstName("AA");
	//	System.out.println(cusRepo.getCustomerDetailsByFirstName(findCustomerById).get(0).getFirstName());
	//	findCustomerById.setEmailId("gaggggggg@yahoo.com");
	//	cusRepo.updateCustomerDetails(findCustomerById);
	*/
		cusRepo.closeCompleteConnection();
	}

}
