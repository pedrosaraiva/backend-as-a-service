function listProviders()
    {
    newscount = 0;
    $.getJSON('data/providers.json', function(data) {
    	$toggle=0;
    	 $.each(data['stack'], function(key, val) {
				if($toggle==0){ 
					var template = $('#providerListingTemplate').html();
					var html = Mustache.to_html(template, val);
					$('#providerListing').append('<tr>'+html);			
					$toggle=1;
					}	
				else{
					var template = $('#providerListingTemplate').html();
					var html = Mustache.to_html(template, val);
					$('#providerListing').append(html+'</tr>');
					$toggle=0;						
					}
	        });
        });

    }    
     