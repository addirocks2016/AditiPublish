$(document).ready(function () {
  getempdataonload();   
  
});
function getempdataonload(){
	localStorage.removeItem('profile');
	repository = platform.readRepository(repositoryId).then(function () {
	    branch = repository.readBranch(branchId).then(function () {
	        var query = { "content": 'true' };
	        var pagination = { "sort": { "name": 1 }, "limit": 9999 };
	        var profile = [];
	        branch.queryNodes({ "_type": "custom:profile0" }, query, pagination).each(function () {
	            $('#fetching-image').show();
	            profile.push({id:this.id, name: this.name, gender: this.gender, country: this.country, brightcoveid: this.brightcoveid, image: this.image, time:this.datetime, url:this.getUri()});
			
				//console.log(this.getUri());
	            localStorage.setItem('profile', JSON.stringify(profile));
	        }).then(function () {
	            analysedata();
	        });
	    })
	})
}

function analysedata()
{
	//$('#fetching-image').show();
	var employee = [];
	$('#profile-div').show();
	$('#fetching-image').hide();
	var divprofile = "";
	employee = JSON.parse(localStorage.getItem('profile') || [])
	console.log(employee);
	//var name = students[4].name;
	for(i=0; i<=employee.length-1; i++){
	//divprofile = "<div id='" + employee[i].name+employee[i].country; + "'" + "class='col-lg-3 col-md-4 col-xs-6 thumb'> <a class='thumbnail' href='#'> <img class='img-responsive' src='assest/img/grey-add-man.jpg' alt=''></a> <img class='img-responsive edit-image' src='assest/img/click-to-edit.png' alt=''> </div>";
	console.log(employee[i].url);
	divprofile = "<div class='col-lg-3 col-md-4 col-xs-6 thumb'" + "data-gender='" + employee[i].gender + "'data-created='" + employee[i].id+"'>";
	divprofile = divprofile + "<a id='" + employee[i].id+ "^" +employee[i].name+"'"+ " class='thumbnail' href='#' onClick='relocateeditpage();'><img class='img-responsive' src='https://aonhewitt.cloudcms.net/proxy"+employee[i].url+"/attachments/undefined' alt='' /></a>" ;
	divprofile = divprofile +  "<img class='img-responsive edit-image' src='assest/img/click-to-edit.png' alt='' /></div>";
	$(divprofile).appendTo('#profile-div');
	//alert(divprofile);
	//console.log(employee);
	}
	
	
}

function relocateeditpage()
{
    $(document).on('click', 'a', function () {
        var url = this.id;
        url =  btoa(url); 
        url = "admin-profile-edit.html" + "#" + url;
        window.location = url;
    });
	
}

function malesort()
{
	//$([data-gender='Male']).display = "none";
	
	$("[data-gender=Female]").hide();
	$("[data-gender=Male]").show();
}

function femalesort()
{
	//$([data-gender='Male']).display = "none";
	$("[data-gender=Male]").hide();
	$("[data-gender=Female]").show();
	
	
}

function allData()
{
	$("[data-gender=Male]").show();
	$("[data-gender=Female]").show();
}


function sorting()
{
	var $wrapper = $('#profile-div');
	$wrapper.find('.thumb').sort(function (a, b) {
    return +a.dataset.created - +b.dataset.created;
	}).appendTo( $wrapper );
}

function desorting()
{
	var $wrapper = $('#profile-div');
	$wrapper.find('.thumb').sort(function (a, b) {
    return  +b.dataset.created - +a.dataset.created;
	}).appendTo( $wrapper );
}

