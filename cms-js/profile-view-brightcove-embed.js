var pathname;
var brightcoveid = '';
$(window).load(function () {

    pathname = window.location.href;
    pathname = pathname.split('#')[1];
    pathname = atob(pathname);
    //alert(pathname);
    //alert(pathname);
    getdataforedit();

});

function getdataforedit() {
    var employee = [];
    employee = JSON.parse(localStorage.getItem('profile') || []);
    //console.log(employee);
    //pathname = employee[0].name
    for (var i = 0; i <= employee.length - 1; i++) {
        var id = pathname.split('^')[0];
        var name = pathname.split('^')[1];
        //alert(name + 'editname');
        //console.log(employee);
        //alert(name);
        //alert(name);
        if (id == employee[i].id && name == employee[i].name) {
            // alert(employee[i].id + employee[i].brightcoveid + employee[i].name + employee[i].country + employee[i].gender + 'IF');
            $('#emp-name-lbl').text(employee[i].name);
            $('#gender-lbl').text(employee[i].gender);
            $('#country-lbl').text(employee[i].country);
            //brightcoveid = employee[i].brightcoveid;
            brightcoveid = employee[i].brightcoveid;

        }

    }
    getbrightid();

}

function getbrightid() {
    var bright = [];
    var divbrightcovethumnails = ''
    bright = brightcoveid.split(',');
    for (i = 0; i <= bright.length - 1; i++) {
        divbrightcovethumnails = "<div class='col-lg-3 col-md-12 col-xs-12'>";
        divbrightcovethumnails = divbrightcovethumnails + "<a id='" + bright[i] + "'' + 'class='thumbnail' onclick='modalpopup();' href='#'><img class='img-responsive' src='assest/img/play-video-thumnail-profile.jpg' alt=''></a>";
        //divbrightcovethumnails = divbrightcovethumnails +  '<img class='img-responsive edit-image' src='assest/img/click-to-edit.png' alt='' /></div>';
        $(divbrightcovethumnails).appendTo('#bright-cove-thumnails');
        //alert(bright[i]);
    }
}


function modalpopup() {
    var url;
    //$('#myModal').modal('show');
    //$(modalbody).appendTo('#modal-body');
    //alert('Nashhh');
    $(document).on('click', 'a', function () {
		$( ".BrightcoveExperience" ).remove();
        url = this.id;
        url = "1365330481001" //fordemo only delete this line when get real id from behind
        createmodal(url);
        
        //alert(url);
    });
    //url = "1365330481001";
    
}

function createmodal(url) {
    var modalbody = "";
	$( ".BrightcoveExperience" ).remove();
	url = "<param name='@videoPlayer' value='" + url + "' />";
    //alert(url);
    //alert(url + "bhar");
    modalbody = "<script language='JavaScript' type='text/javascript' src='assest/js/BrightcoveExperiences.js'></script><object id='myExperience' class='BrightcoveExperience'><param name='bgcolor' value='#FFFFFF' /><param name='width' value='570' /><param name='height' value='480' /><param name='playerID' value='4459727964001' /><param name='playerKey' value='AQ~~,AAAAFR9P4ZE~,jkEYCMYOtM2H5swvVpnBp1k18_glQM0d' /><param name='isVid' value='true' /><param name='isUI' value='true' /<param name='dynamicStreaming' value='true' /><param name='autoStart' value='true' />" + url + "<param name='autoStart' value='true' /><param name='includeAPI' value='true' /><param name='templateLoadHandler' value='onTemplateLoad' /><param name='templateReadyHandler' value='onTemplateReady' /></object><script type='text/javascript'>brightcove.createExperiences();</script>";
    //alert(modalbody);
    $(modalbody).appendTo('#modal-body');
    $('#myModal').modal('show');
}