function login(form){
var username = document.getElementById("Username").value;
var password = document.getElementById("Password").value;
var flag=0;	
if (username == 'talentpool' && password == 'aonhewitt'){

sessionStorage.setItem('username', username);
sessionStorage.setItem('password', password);
    sessionStorage.setItem('GITANA_TICKET', GITANA_TICKET);
flag=1;
//window.location = "adminmainpagelanding.html"; 
 //window.open('adminmainpagelanding.html')// Redirecting to other page.

}
if(flag==1){
	window.location.replace("adminmainpagelanding.html");
}
else{
	alert("Please enter correct username or password");
}
//action="adminmainpagelanding.html"
}
function logout(){
	sessionStorage.removeItem('username');
	sessionStorage.removeItem('password');
	window.location.replace("logout.html");
}
