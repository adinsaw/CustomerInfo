package com.customer.repo;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

import com.customer.entity.CustomerTransaction;

public class CustomerTransactionRepository {

	private EntityManagerFactory entityManagerFactory;
	private EntityManager entityManager;
//constructor to instantiate the session
	public CustomerTransactionRepository(){
	entityManagerFactory = Persistence.createEntityManagerFactory("CustomerTransaction");
	entityManager = entityManagerFactory.createEntityManager();
	entityManager.getTransaction().begin();
	}
	public List<CustomerTransaction> findCustomerTransactionDetails(String customerId)
	{
		  return entityManager.createQuery
				  ("select customerTransaction from CustomerTransaction customerTransaction where customerId="+customerId)
				     .getResultList();
	}

public int createCustomerTransaction(CustomerTransaction customerTransaction)
{
	try {

		entityManager.persist(customerTransaction);
		entityManager.getTransaction().commit();
	} catch (Exception e) {
		if(entityManager.getTransaction().isActive()){
		entityManager.getTransaction().rollback();}
		e.printStackTrace();
		return 400;
	}
	return 200;
}
public int updateCustomerTransaction(CustomerTransaction customerTransaction)
{
	try {
		entityManager.merge(customerTransaction);
		entityManager.getTransaction().commit();
	} catch (Exception e) {
		e.printStackTrace();
		return 400;
	}
	return 200;
}

public int deleteCustomerTransaction(Long customerTransactionId)
{
	try {
		Query query=entityManager.createNativeQuery("DELETE from CUSTOMER_TRANSACTION where CUSTOMERTRANSACTIONID in ("+customerTransactionId+")");
	query.executeUpdate();
		entityManager.getTransaction().commit();
	} catch (Exception e) {
		e.printStackTrace();
		return 400;
	}
	return 200;
}	
}
