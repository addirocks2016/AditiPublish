$(window).load(function () {
	$('#fetching-image').hide();
    //alert("ALIVE FOR READ");
	getempdataonload();
	//$('#fetching-image').hide();
	//analysedata();
	
});


function getempdataonload(){
	//var profile = [];
	localStorage.removeItem('profile');
	repository = platform.readRepository(repositoryId).then(function () {
	    branch = repository.readBranch(branchId).then(function () {
	        //$('#fetching-image').show();
	        var query = { "content": 'true' };
	        var pagination = { "sort": { "name": 1 }, "limit": 9999 };
	        var profile = [];
	        branch.queryNodes({ "_type": "custom:profile0" }, query, pagination).each(function () {
	            $('#fetching-image').show();
	            profile.push({id:this.id, name: this.name, gender: this.gender, country: this.country, brightcoveid: this.brightcoveid, image: this.image });
	            localStorage.setItem('profile', JSON.stringify(profile));
	            //console.log(this[0].created_on.timestamp);
	        }).then(function () {
	            analysedata();
	        });
	    })
	})
}

function analysedata()
{
	//$('#fetching-image').show();
	//var employee = [];
	$('#fetching-image').hide();
	var divprofile = "";
	var employee = JSON.parse(localStorage.getItem('profile') || [])
	//alert(employee[0].name);
	//var name = students[4].name;
	for(i=0; i<=employee.length-1; i++){
	//divprofile = "<div id='" + employee[i].name+employee[i].country; + "'" + "class='col-lg-3 col-md-4 col-xs-6 thumb'> <a class='thumbnail' href='#'> <img class='img-responsive' src='assest/img/grey-add-man.jpg' alt=''></a> <img class='img-responsive edit-image' src='assest/img/click-to-edit.png' alt=''> </div>";
	divprofile = "<div class='col-lg-3 col-md-4 col-xs-6 thumb'>";
	divprofile = divprofile + "<a id='" + employee[i].id+ "^" +employee[i].name +"'"+ " class='thumbnail' href='#' onClick='relocateeditpage();'><img class='img-responsive' src='assest/img/grey-add-man.jpg' alt=''></a>" ;
	divprofile = divprofile +  "</div>";
	$(divprofile).appendTo('#profile-div2');
	//alert(divprofile);
	}
	
	
}


function relocateeditpage()
{
	$(document).on('click', 'a', function () {
	    var url = this.id;
	    url = btoa(url); 
	    url = "admin-profile-view.html" + "#" + url;
	    window.location = url;
    });
	
}
