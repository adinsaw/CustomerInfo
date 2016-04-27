package com.customer.entity;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
@Table(name="CUSTOMER_TRANSACTION")
public class CustomerTransaction {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="CUSTOMERTRANSACTIONID")
	private long customerTransactionId;
	@JsonBackReference
	@ManyToOne
	@JoinColumn(name="CUSTOMERID")
	private Customer customer; 
	
	@Column(name="TRANSACTIONDATE")
	private String transactionDate;
	
	@OneToMany(mappedBy = "customerTransaction", cascade = CascadeType.ALL,fetch=FetchType.EAGER)
	@JsonManagedReference
	private List<CustomerProductInformation> customerProductInformation;
	
		public long getCustomerTransactionId() {
		return customerTransactionId;
	}


	public void setCustomerTransactionId(long customerTransactionId) {
		this.customerTransactionId = customerTransactionId;
	}


	public List<CustomerProductInformation> getCustomerProductInformation() {
		return customerProductInformation;
	}


	public void setCustomerProductInformation(List<CustomerProductInformation> customerProductInformation) {
		this.customerProductInformation = customerProductInformation;
	}


		public long getTransactionId() {
		return customerTransactionId;
	}

		
	public void setTransactionId(long transactionId) {
		this.customerTransactionId = transactionId;
	}

	public Customer getCustomer() {
		return customer;
	}

	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

	public String getTransactionDate() {
		
		
		return transactionDate;
	}

	public void setTransactionDate(String transactionDate) {
		this.transactionDate = transactionDate;
	}
	

}
