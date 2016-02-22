var clientKey = "1e1e224e-6ae4-4eb4-9795-8b0b00fa5f63";
var clientSecret = "jrvYHOBCz7m5s2ybJTVa9TBw9onCSsmcUZeDHDGr8ZZwjY0Wy3jVg2d4dqua74rV8Eo9bjVfLRVhdNykH45w55T6KwBxfWRn+cXHE8oPSdU=";
var username = "f44dc67a-8dd0-417a-bef4-9324e89742be";
var password = "Q7fRBvdbkFbpFTesNZvKi9CepsZYjvFHLWVkWe+zVBrBpG+AsbZxXW7134x3cngfQyvI9c0LbWdO/JBEUZ7QGqAWR0/5l/EJgFV+mOjM/yM=";
var applicationId = "8428b6fe9176f694a8e5";
talentwebsite:
var repositoryId = '4453eed66766d424b14e';
var branchId = '58be9297f2c3838bd487';
var repository;
var branch;
var newCommentId;
var counter = 0;
var nodes = [];
var profile = [];
var length1 = 0;
var allReleaseObjects = [];

platform = Gitana.connect({
    "clientKey": clientKey,
    "clientSecret": clientSecret,
    "username": username,
    "password": password,
    "baseURL": "https://api.cloudcms.com/proxy",
    "application": applicationId,
    "storage":

}).then(function () {
    alert('con done 1');
   this= platform.createRepository().readBranch("branchId").createNode({"title": "AditiPlublishProjectTitle"});
alert('con done');
    
});