package com.customer.config;



import com.fasterxml.jackson.annotation.JsonProperty;

import io.dropwizard.Configuration;

public class CustomerConfiguration extends Configuration {
	@JsonProperty
	private String defaultTimeZone;

	public String getDefaultTimeZone() {
		return defaultTimeZone;
	}

	

}
