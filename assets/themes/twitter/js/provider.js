function listProviders()
    {
    newscount = 0;
    $.getJSON('data/providers.json', function(data) {
    	$toggle=1;
    	 $.each(data['stack'], function(key, val) {
				var template = $('#providerListingTemplate').html();
				var html = Mustache.to_html(template, val);
				$('#providerListing').append(html);
				if($toggle==2){ 
					html = "</tr><tr>";
					$('#providerListing').append(html);
					$toggle=1;
					}
				else{
					$toggle++;
				}
				alert($toggle);
	        });
        
        });
        
    }    
     