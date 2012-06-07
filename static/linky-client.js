$(document).ready(function() {
	$.ajax({
        url : 'http://localhost:8888/registerHit',
        success : function(response) {
        	alert(response);
		},
        error : function() {
			alert("AJAX Error");
        }
    });
});