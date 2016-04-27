package com.customer.config;

public class Status {

	private int statusCode;
	private String message;
	
	public Status(int i, String string) {
		this.statusCode = statusCode;
		this.message = message;
		// TODO Auto-generated constructor stub
	}
	public Status() {

		// TODO Auto-generated constructor stub
	}

	public Object getStatus(int status,String message)
	{
		Status st=new Status(status,message);
		
		return st;
	}

	public void setStatus(int statusCode, String message) {
		
		this.statusCode = statusCode;
		this.message = message;
	}

	

		
}
