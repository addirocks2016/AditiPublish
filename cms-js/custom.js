function login(form){
var username = document.getElementById("Username").value;
var password = document.getElementById("Password").value;
var flag=0;	
if (username == 'talentpool' && password == 'aonhewitt'){
sessionStorage.setItem('username', username);
sessionStorage.setItem('password', password);
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
	window.location.replace("screen1.html");
}
