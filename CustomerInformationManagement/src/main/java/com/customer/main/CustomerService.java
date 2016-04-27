package com.customer.main;
import com.customer.config.CustomerConfiguration;

import io.dropwizard.Application;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;


public class CustomerService extends Application<CustomerConfiguration> {

	public static void main (String[] args) throws Exception
	{
		new CustomerService().run(new String[] { "server" });
		
	}
	public void initialize(Bootstrap<CustomerConfiguration> bootstrap)
	{
		
	}
	@Override
	public void run(CustomerConfiguration customerConfig, Environment environment) throws Exception {
		// TODO Auto-generated method stub
		String defaultTimeZone=customerConfig.getDefaultTimeZone();
		CustomerController customerController=new CustomerController();
		environment.jersey().register(customerController);
	}

}
