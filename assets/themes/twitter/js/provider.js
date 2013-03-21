function listProviders()
    {
    $.getJSON('data/providers.json', function(data) {
    	toggle = 0;
    	 $.each(data['stack'], function(key, val) {
    	 	alert(toggle); 	
    	 	
    	 	if(toggle==1){
					
				var template = $('#providerListingTemplate1').html();
				var html = Mustache.to_html(template, val);
				$('#providerListing').append(html);    					
					
				toggle=0;
				}
			else{
				
				var template = $('#providerListingTemplate2').html();
				var html = Mustache.to_html(template, val);
				$('#providerListing').append(html);    						
				
				toggle=1;
			}
			alert($('#providerListing').html());
	        });
        });

    }    
     