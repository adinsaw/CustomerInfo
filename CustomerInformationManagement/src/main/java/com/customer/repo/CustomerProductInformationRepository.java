	package com.customer.repo;

	import java.util.List;

	import javax.persistence.EntityManager;
	import javax.persistence.EntityManagerFactory;
	import javax.persistence.Persistence;
	import javax.persistence.Query;

import com.customer.entity.CustomerProductInformation;
import com.customer.entity.CustomerTransaction;

	public class CustomerProductInformationRepository {

		private EntityManagerFactory entityManagerFactory;
		private EntityManager entityManager;
	//constructor to instantiate the session
		public CustomerProductInformationRepository(){
		entityManagerFactory = Persistence.createEntityManagerFactory("CustomerProductInformation");
		entityManager = entityManagerFactory.createEntityManager();
		entityManager.getTransaction().begin();
		}
		public List<CustomerProductInformation> findProductInformationDetails(String customerTransactionId)
		{
			  return entityManager.createQuery
					  ("select CustomerProductInformation from CustomerProductInformation customerProductInformation where customerId="+customerTransactionId)
					     .getResultList();
		}

	public int createProductInformation(CustomerProductInformation productInfo)
	{
		try {

			entityManager.persist(productInfo);
			entityManager.getTransaction().commit();
		} catch (Exception e) {
			if(entityManager.getTransaction().isActive()){
			entityManager.getTransaction().rollback();}
			e.printStackTrace();
			return 400;
		}
		return 200;
	}
	public int updateProductInformation(CustomerProductInformation productInfo)
	{
		try {
			entityManager.merge(productInfo);
			entityManager.getTransaction().commit();
		} catch (Exception e) {
			e.printStackTrace();
			return 400;
		}
		return 200;
	}

	public int deleteCustomerTransaction(Long productInfoId)
	{
		try {
			Query query=entityManager.createNativeQuery("DELETE from Customer_Product_Info where CustomerProductInfoId in ("+productInfoId+")");
		query.executeUpdate();
			entityManager.getTransaction().commit();
		} catch (Exception e) {
			e.printStackTrace();
			return 400;
		}
		return 200;
	}	
	}
	
	
	

