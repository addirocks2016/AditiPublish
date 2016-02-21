$(document).ready(function () {$("#header").load("inc-nav.html");});
$(document).ready(function() {
        $('.clickme').click(function(e) {
            e.preventDefault();

            boxh = $('#popup').height();
            windowh = $(window).height();

            $('#popup').css('margin-top', windowh/2 - boxh/2);

            $('#popup').fadeIn();
        });
        $('.clicktoclose').click(function() {
            $('#popup').fadeOut;
        });
    });
$(document).ready(function() {
        $('adminmainpage .thumbnail').click(function(e) {
			location.href = "screen3-admineditprofile.html";							   
});
         $('.edit-image').click(function(e) {
			location.href = "screen3-admineditprofile.html";								   
});
		 $('.collapsed').click(function(e) {
		alert("nashhh");							   
});
     
    });


 