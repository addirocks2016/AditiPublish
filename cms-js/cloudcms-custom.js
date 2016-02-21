//var clientKey = "1e1e224e-6ae4-4eb4-9795-8b0b00fa5f63";
//var clientSecret = "jrvYHOBCz7m5s2ybJTVa9TBw9onCSsmcUZeDHDGr8ZZwjY0Wy3jVg2d4dqua74rV8Eo9bjVfLRVhdNykH45w55T6KwBxfWRn+cXHE8oPSdU=";
//var username = "f44dc67a-8dd0-417a-bef4-9324e89742be";
//var password = "Q7fRBvdbkFbpFTesNZvKi9CepsZYjvFHLWVkWe+zVBrBpG+AsbZxXW7134x3cngfQyvI9c0LbWdO/JBEUZ7QGqAWR0/5l/EJgFV+mOjM/yM=";
//var applicationId = "8428b6fe9176f694a8e5";
//talentwebsite:
////var repositoryId = '08a6d0b854cca496951b';
////var branchId = 'ddf67faa6edc8e3074bb';
////ahroadmap admin
//var repositoryId = '4453eed66766d424b14e';
//var branchId = '58be9297f2c3838bd487';
//var repository;
//var branch;
//var newCommentId;
//var counter = 0;
//var nodes = [];
//var profile = [];
//var length1 = 0;
//var allReleaseObjects = [];
////var allPortfolioObjects = [];

////var allPlatformObjects = [];
////var allReleaseObjects = [];
////var allFeatureObjects = [];

//platform =Gitana.connect({
//    "clientKey": clientKey,
//	"clientSecret": clientSecret,
//	"username": username,
//	"password": password,
//	"baseURL": "https://api.cloudcms.com"
//}).then (function(){
////upload();
//	alert("connection created");
//	repository = platform.readRepository(repositoryId).then(function () {
//	branch = repository.readBranch(branchId).then(function () {
//	var query = {"content": 'true'};
//	var pagination = {"sort": {"name": 1},"limit": 9999};
//	branch.queryNodes({"_type": "custom:profile0"},query,pagination).each(function() {
//    //alert("Q name Found");
//   // var country111=[];
//	//var country2 = this.country + this.id + this.name + this.gender + this.country;
//	//alert(country2);
//	//var rowssss = this.rows;
//	//alert(rowssss);
//	//for(i=1; i<=0; i++){}
//	profile.push(this);
//	var r = profile[counter].name;
//	counter ++;
//	alert(r);
//	
//				})
//			});
//	
//		});
//});

//function upload()
//{
//repository = platform.readRepository(repositoryId);
//branch = repository.readBranch(branchId);
//branch.createNode({
//    "id": "002",
//    "name": "EMPLOYEE1",
//    "gender": "MALE",
//	"_type": "custom:profile0",
//	"type": "profile",
//    "country": "INDIA",
//    "brightcoveid": "123456",
//    "image": "http://image1",
//  }).then(function(){
//	  var authorizationHeader = platform.getDriver().getHttpHeaders()["Authorization"];
//	  $.ajax({
//      type: "POST",
//      url: "https://api.cloudcms.com/repositories/" + repositoryId + "/branches/" + branchId + "/nodes/",
//      contentType: false,
//      processData: false,
//	  headers: {
//        authorization: authorizationHeader
//      }
//    }).done(function() {
//      alert("Uploded");
//      location.reload(true);
//    }).fail(function() {
//      alert("not uploaded");
//    })
//	  })
//}
