package com.customer.entity;

import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
//this class is used to create the customer java object map to the customer entity in DB

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonRootName;


@Entity
@Table(name="CUSTOMER_INFORMATION")
@JsonRootName("customer")
public class Customer {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)	
@Column(name="CUSTOMERID")
private	long customerId=0;
@Column(name="FIRSTNAME")	
private String firstName;
@Column(name="MIDDLENAME")	
private String middleName;
@Column(name="LASTNAME")	
private String lastName;
@Column(name="EMAILID")
private String emailId;
@Column(name="PHONENUMBER")
private long phoneNumber;
@Column(name="HOUSENUMBER")
private String houseNumber;
@Column(name="ADDRESSLINE1")
private String addressLine1;
@Column(name="ADDRESSLINE2")
private String addressLine2;
@Column(name="CITYNAME")
private String cityName;
@Column(name="PINCODE")
private int pinCode;
@JsonManagedReference
@OneToMany(mappedBy = "customer", cascade = {CascadeType.ALL,CascadeType.PERSIST},fetch=FetchType.LAZY)
private List<CustomerTransaction> customerTransaction;
public List<CustomerTransaction> getCustomerTransaction() {
	return customerTransaction;
}
public void setCustomerTransaction(List<CustomerTransaction> customerTransaction) {
	this.customerTransaction = customerTransaction;
}
public long getCustomerId() {
	return customerId;
}
public void setCustomerId(long customerId) {
	this.customerId = customerId;
}


public String getFirstName() {
	return firstName;
}
public void setFirstName(String firstName) {
	this.firstName = firstName;
}
public String getMiddleName() {
	return middleName;
}
public void setMiddleName(String middleName) {
	this.middleName = middleName;
}
public String getLastName() {
	return lastName;
}
public void setLastName(String lastName) {
	this.lastName = lastName;
}
public String getEmailId() {
	return emailId;
}
public void setEmailId(String emailId) {
	this.emailId = emailId;
}
public long getPhoneNumber() {
	return phoneNumber;
}
public void setPhoneNumber(long phoneNumber) {
	this.phoneNumber = phoneNumber;
}
public String getHouseNumber() {
	return houseNumber;
}
public void setHouseNumber(String houseNumber) {
	this.houseNumber = houseNumber;
}
public String getAddressLine1() {
	return addressLine1;
}
public void setAddressLine1(String addressLine1) {
	this.addressLine1 = addressLine1;
}
public String getAddressLine2() {
	return addressLine2;
}
public void setAddressLine2(String addressLine2) {
	this.addressLine2 = addressLine2;
}
public String getCityName() {
	return cityName;
}
public void setCityName(String cityName) {
	this.cityName = cityName;
}
public int getPinCode() {
	return pinCode;
}
public void setPinCode(int pinCode) {
	this.pinCode = pinCode;
}

}
