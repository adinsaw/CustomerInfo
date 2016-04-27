package com.customer.repo;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.Query;

import com.customer.config.Status;
import com.customer.entity.Customer;

//this is used to persist the data into the tables.
//purpose is to define generic functions which will form objects and persist.
//3steps are required create entity manager then entity manager factory and then session
public class CustomerRepository {
	private EntityManagerFactory entityManagerFactory;
	private EntityManager entityManager;
	Status status=new Status();
	// constructor to instantiate the entity manager.
	public CustomerRepository() {

		entityManagerFactory = Persistence.createEntityManagerFactory("CustomerInformation");
		entityManager = entityManagerFactory.createEntityManager();
		entityManager.getTransaction().begin();
		
	}

	public int createCustomerDetails(Customer customer)

	{
		try {

			entityManager.persist(customer);
			entityManager.getTransaction().commit();
		} catch (Exception e) {
			if(entityManager.getTransaction().isActive()){
			entityManager.getTransaction().rollback();}
			e.printStackTrace();
			return 400;
		}
		return 200;
	}

	public List<Customer> getCustomerDetailsById(long customerId) {
		Customer customerResult = null;
		List<Customer> customersList = null;
		if (customerId != 0) {
			customersList = entityManager.createQuery(
					"select customer from Customer customer where CUSTOMERID IN (" + customerId + ")")
					.getResultList();
			return customersList;
		} else
			System.out.println("INVALID INPUT");
		return customersList;
	}

	public List<Customer> getCustomerDetailsByFullName(Customer customer) {
		Customer customerResult = null;
		List<Customer> customersList = null;
		if (!(customer.getFirstName().isEmpty() && customer.getLastName().isEmpty()
				&& customer.getMiddleName().isEmpty())) {
		
			return  entityManager.createQuery(
					"select customer from Customer customer where FIRSTNAME IN ('" + customer.getFirstName() + "') and MIDDLENAME in ('"
							+ customer.getMiddleName() + "') and LASTNAME in ('" + customer.getLastName() + "')")
					.getResultList();
		} else
			System.out.println("INVALID INPUT");
		return customersList;
	}

	public List<Customer> getCustomerDetailsByFirstLastName(Customer customer) {
		Customer customerResult = null;
		List<Customer> customersList = null;
		if (!(customer.getFirstName().isEmpty() && customer.getLastName().isEmpty())) {
			
			
			return entityManager.createQuery("select customer from Customer customer where FIRSTNAME IN ('"
					+ customer.getFirstName() + "') and LASTNAME in ('" + customer.getLastName() + "')").getResultList();
		} else
			System.out.println("INVALID INPUT");
		return customersList;
	}

	public List<Customer> getCustomerDetailsByFirstName(Customer customer) {
		Customer customerResult = null;
		List<Customer> customersList = null;
		if (!(customer.getFirstName().isEmpty())) {
			customersList = entityManager.createQuery("select customer from Customer customer where FIRSTNAME IN (" +"'" +customer.getFirstName() +"'"+ ")").getResultList();
			return (List<Customer>) entityManager.find(Customer.class,customer);
			//return customersList;
		} else
			System.out.println("INVALID INPUT");
		return customersList;
	}

	public List<Customer> getCustomerDetailsByLastName(Customer customer) {
		Customer customerResult = null;
		List<Customer> customersList = null;
		if (!(customer.getLastName().isEmpty())) {
			customersList = (List<Customer>) entityManager
					.createQuery("select customer from Customer customer where LASTNAME IN ('" + customer.getLastName() + "')")
					.getResultList();
			return customersList;
		} else
			System.out.println("INVALID INPUT");
		return customersList;
	}

	public int updateCustomerDetails(Customer customer) {
		try {
			System.out.println("I aM HERE");
			entityManager.merge(customer);
			entityManager.getTransaction().commit();
		} catch (Exception e) {
			e.printStackTrace();
			return 400;
		}
		return 200;
	}

	public int deleteCustomerDetails(Customer customer) {
		try {
			Query query=entityManager.createNativeQuery("DELETE from CUSTOMER_INFORMATION where CUSTOMERID in ("+customer.getCustomerId()+")");
		query.executeUpdate();
			entityManager.getTransaction().commit();
		} catch (Exception e) {
			e.printStackTrace();
			return 400;
		}
		return 200;
	}
	
	public List<Customer> findAllCustomers()
	{List<Customer> customersList = null;
		customersList = (List<Customer>) entityManager.createQuery("select customer from Customer customer")
				.getResultList();
		return customersList;
	}

	public int closeCompleteConnection() {
		try {
			entityManager.close();
			entityManagerFactory.close();
		} catch (Exception e) {
			e.printStackTrace();
			return 400;
		}
		return 200;
	}
	public int closeManagerConnection() {
		try {
			entityManager.close();
			
		} catch (Exception e) {
			e.printStackTrace();
			return 400;
		}
		return 200;
	}
}

