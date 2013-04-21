function listProviders()
    {
    $.getJSON('data/companies.json', function(data) {
    	toggle = 0;
    	 $.each(data['company'], function(key, val) {
			var template = $('#providerListingTemplate').html();
			var html = Mustache.to_html(template, val);
			$('#providerListing').append(html);    						
	        });
        });

    }    
     