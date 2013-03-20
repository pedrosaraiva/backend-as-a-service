function listProviders()
    {
    newscount = 0;
    $.getJSON('data/providers.json', function(data) {
    	
    	$toggle=0;
		$('#providerListing').append('<tr>');
    	 $.each(data['stack'], function(key, val) {
    	 		alert($toggle);
				var template = $('#providerListingTemplate').html();
				var html = Mustache.to_html(template, val);
				$('#providerListing').append(html);
				
				if($toggle==1){ 
					rows = "</tr><tr>";
					$('#providerListing').append(rows);						

					$toggle=0;
					}	
				else{$toggle=1;}
	        });
        $('#providerListing').append('</tr>');
        });

    }    
     