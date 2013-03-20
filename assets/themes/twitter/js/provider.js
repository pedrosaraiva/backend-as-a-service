function listProviders()
    {
    newscount = 0;
    $.getJSON('data/providers.json', function(data) {
    	
    	 $.each(data['stack'], function(key, val) {
				var template = $('#providerListingTemplate').html();
				var html = Mustache.to_html(template, val);
				$('#providerListing').append(html);
	        });
        
        });
        
    }    
     