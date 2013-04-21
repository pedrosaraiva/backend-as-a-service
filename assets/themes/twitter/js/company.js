function listCompanies()
    {
    $.getJSON('data/companies.json', function(data) {
    	toggle = 0;
    	 $.each(data['company'], function(key, val) {
			var template = $('#companyListingTemplate').html();
			var html = Mustache.to_html(template, val);
			$('#companyListing').append(html);    						
	        });
        });
    }    
function getCompanyDetails(id)
    {
    $.getJSON('data/companies.json', function(data) {  	
        $.each(data['company'], function(key, val) {
        	
        	thisid = val['id'];
        	
        	if(thisid == id)
        		{
                var template = $('#companyDetailTemplate').html();
                var html = Mustache.to_html(template, val);
                $('#companyDetail').append(html);
            	}
            
            website = val['website'];
        	if(thisid == id){ $("a#home-icon").attr('href',website); }
        			            	
            	
          	});                                    
        });
    }  