//<!-- Google Analytics -->
// This code is optimized for IS&T sites other than PEM sites
//Insert this code before the closing </head> element
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');


ga('create', myEnvironment(), 'auto');
//No additional Dimensions are required for IS&T sites
ga('send', 'pageview');


// the following function identifies the environment(QA,QC, PROD) and returns the appropriate ID code
// Domains not preceeded by qa. or qc. are assumed to be production
function myEnvironment() {
    
    var environmentString = location.hostname; // ex. qa.makeityoursource.com/compareprices/csc/

    var returnValue;

if (environmentString.substring(0,3) == "qa.") {
    returnValue="UA-51404617-1"; 
}  else if (environmentString.substring(0,3) == "qc.") {
    returnValue="UA-51404617-1"; 
}  else if (environmentString.substring(0,3) == "rs.") {
    returnValue="UA-51404617-1"; 	
} else  {
    //alert("GA GO");
    returnValue="UA-19497443-2"; // Replace as appropriate with Production Property Id
}
return returnValue;  
}

//<!-- End Google Analytics -->




