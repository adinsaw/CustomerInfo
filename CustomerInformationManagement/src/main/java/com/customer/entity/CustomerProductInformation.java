package com.customer.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="CUSTOMER_PRODUCT_INFO")
public class CustomerProductInformation {

	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="CUSTOMERPRODUCTINFOID")
	
	private long customerProductInfoId;

	@ManyToOne
	@JsonBackReference
	@JoinColumn(name="CUSTOMERTRANSACTIONID")
	private CustomerTransaction customerTransaction;
	
	public long getCustomerProductInfoId() {
		return customerProductInfoId;
	}
	public void setCustomerProductInfoId(long customerProductInfoId) {
		this.customerProductInfoId = customerProductInfoId;
	}
	public CustomerTransaction getCustomerTransaction() {
		return customerTransaction;
	}
	public void setCustomerTransaction(CustomerTransaction customerTransaction) {
		this.customerTransaction = customerTransaction;
	}
	public long getProductId() {
		return productId;
	}
	public void setProductId(long productId) {
		this.productId = productId;
	}
	public long getQuantity() {
		return quantity;
	}
	public void setQuantity(long quantity) {
		this.quantity = quantity;
	}
	public String getProductDescription() {
		return productDescription;
	}
	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	@Column(name="PRODUCTID")
	private long productId;
	@Column(name="QUANTITY")
	private long quantity;
	@Column(name="PRODUCTDESCRIPTION")
	private String productDescription;
	@Column(name="PRODUCTNAME")
	private String productName;
	
	
}
