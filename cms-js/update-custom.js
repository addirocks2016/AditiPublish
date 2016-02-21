function addemployee(){addemployee:
{
    var idnumber = localStorage.getItem('idnumber');
    idnumber++;
    //alert(idnumber);
    $("#loading-image").show();
	var name = $("#emp-name").val();
	if(name!== ""){
	var gender = $("#emp-gender").val();
	if(gender!== ""){
	var country = $("#emp-country").val();
	if(country!== ""){
	var brighcove = $(".bright-label").map(function () {return this.id;}).get().join();
	//alert(brighcove);
	var upload = $("#emp-upload-photo").val()
	//alert(upload);
	if(brighcove!== ""){
	//alert(upload);
	repository = platform.readRepository(repositoryId);
	branch = repository.readBranch(branchId);
	if ($("#emp-upload-photo").val()!=="") {
	branch.createNode({
	"id": idnumber,
    "name": name,
    "gender": gender,
	"title": name+ "-" +country + "-" +"ID"+ idnumber,
	"_type": "custom:profile0",
	"type": "profile",
    "country": country,
    "brightcoveid": brighcove,
    "image": upload,
  }).then(function(){
	  var authorizationHeader = platform.getDriver().getHttpHeaders()["Authorization"];
	  $.ajax({
      type: "POST",
      url: "https://api.cloudcms.com/repositories/" + repositoryId + "/branches/" + branchId + "/attachments/" + $("#emp-upload-photo").val() + "/",
      contentType: false,
      processData: false,
	  headers: {
        authorization: authorizationHeader
      }
    }).done(function() {
      alert("Uploded completely");
	  $("#loading-image").hide();
      localStorage.setItem('idnumber', idnumber);
      //alert(idnumber)
      
      //location.reload(true);
    }).fail(function() {
      alert("Attachemnt not uploaded data is uploaded");
	  $("#loading-image").hide();
      localStorage.setItem('idnumber', idnumber);
     // alert(idnumber)
     
    })
	 })
	//alert(gender);
	}else{alert("Please attached a file");$("#loading-image").hide();}
	}else{alert("Please mention Brighcove ID");$("#loading-image").hide();}
	}else{alert("Please select Country");$("#loading-image").hide();}
	}else{alert("Please select Gender");$("#loading-image").hide();}
	}else{alert("Please mention Name");$("#loading-image").hide();}
		
		
	}}

function addlabel() {
var text = $('#emp-brightcove-id').val();
if (text !== "") {
    var xat = localStorage.getItem("up");
    //alert(xat);
    if (xat > 9) {
        localStorage.removeItem("up"); xat = ""; alert("Video ID limit Exceed");
        $('#add-btn').hide();
    }
    var textboxdata = $('#emp-brightcove-id').val();
    var labeldata = "";
    if (xat == "" || xat == null) { var i = 1; localStorage.setItem("up", i); }
    else { localStorage.setItem("up", xat); }
    i = localStorage.getItem("up");
    labeldata = labeldata + "<label class='bright-label' id ='" + textboxdata + "'>" + textboxdata + "</label>" + "<br/>";
   // labeldata = labeldata + "<button id='btn" + i + "'>del</button><br/>";
    $(labeldata).appendTo('#div-brightcove');
    //alert(labeldata);
    xat = i;
    xat++;
    localStorage.setItem("up", xat);
    $('#emp-brightcove-id').val("");
} else {alert("please enter video id");}
}


$(window).load(function () {
    localStorage.removeItem("up");
    getempdataonloadedit();
	
});

