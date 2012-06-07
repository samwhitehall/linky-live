$(document).ready(function() {
	// register a hit with the server on loading the page
	$.ajax({
        url : 'http://localhost:8888/registerHit',
        success : function(response) {
        	alert(response);
		},
        error : function() {
			alert("AJAX Error");
        }
    });

	// allow mouseover events to be monitored
	$('a').mouseenter(function() {
		$.ajax({
			type : 'POST',
			data : { 'a_id' : $(this).attr('id'), 
					 'a_href' : $(this).attr('href')
				   },

	        url : 'http://localhost:8888/registerHover',

	        error : function() {
				alert("AJAX Error");
	        }
	    });
	});
});