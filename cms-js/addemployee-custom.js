$(document).ready(function () {
    localStorage.removeItem("up");
    getempdataonloadedit();
});


function getempdataonloadedit() {
    var profile = [];
    var identity = [];
    var number;
    localStorage.removeItem('profile');
    localStorage.removeItem('idnumber');
    var idnumber = localStorage.getItem('idnumber');
    repository = platform.readRepository(repositoryId).then(function () {
        branch = repository.readBranch(branchId).then(function () {
            var query = { "content": 'true' };
            var pagination = { "sort": { "name": 1 }, "limit": 9999 };
            var profile = [];
            branch.queryNodes({ "_type": "custom:profile0" }).each(function () {
                profile.push({ id: this.id, name: this.name, gender: this.gender, country: this.country, brightcoveid: this.brightcoveid, image: this.image, time: this.datetime, url: this.getUri() });
                identity.push({ id: this.id });
                localStorage.setItem('profile', JSON.stringify(profile));
                localStorage.setItem('identity', JSON.stringify(identity));
            }).then(function () { getlastid(); })
        })
    })

}

function getlastid() {
    var array = [];
    var identity = [];
    var identity = JSON.parse(localStorage.getItem('identity') || [])
    for (i = 0; i <= identity.length - 1; i++) {
        array[i] = identity[i].id;

    }
    array.sort(function (a, b) { return a - b });
    console.log(array);
    var identity = array[array.length - 1];
    console.log(identity);
    localStorage.setItem('idnumber', identity);
}


function addemployee() {
    var idnumber = localStorage.getItem('idnumber');
    idnumber++;
    //alert(idnumber);
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
         + (currentdate.getMonth() + 1) + "/"
         + currentdate.getFullYear() + " @ "
         + currentdate.getHours() + ":"
         + currentdate.getMinutes() + ":"
         + currentdate.getSeconds();
    datetime = String(datetime);
    //alert(datetime);
    $("#loading-image").show();
    var name = $("#emp-name").val();
    if (name !== "") {
        var gender = $("#emp-gender").val();
        if (gender !== "") {
            var country = $("#emp-country").val();
            if (country !== "") {
                var brighcove = $(".bright-label").map(function () {
                    return this.id;
                }).get().join();
                //alert(brighcove);
                var upload = $("#myFileUpload4").val();
                upload = upload.replace(/^.*[\\\/]/, '')
                console.log(upload);
                if (brighcove !== "") {
                    //alert(upload);
                    repository = platform.readRepository(repositoryId);
                    branch = repository.readBranch(branchId);
                    if ($("#myFileUpload4").val() !== "") {
                        branch.createNode({
                            "id": idnumber,
                            "name": name,
                            "gender": gender,
                            "title": name + "-" + "ID" + idnumber,
                            "_type": "custom:profile0",
                            "type": "profile",
                            "country": "country",
                            "brightcoveid": brighcove,
                            "datetime": datetime,
                            "image": upload
                        }).then(function () {
                            nodeid = this.getId();
                            console.log("File Upload routine is being processed. Put process should have completed by now");
                            var formData = new FormData($("#frmeditSubmitForm4")[0]);
                            //console.log(formData);
                            var authorizationHeader = platform.getDriver().getHttpHeaders()["Authorization"];
                            var form = $("#frmeditSubmitForm4");
                            $.ajax({
                                type: "POST",
                                url: "https://api.cloudcms.com/repositories/" + repositoryId + "/branches/" + branchId + "/nodes/" + nodeid + "/attachments/" + "undefined" + "/",
                                data: formData,
                                contentType: false,
                                processData: false,
                                headers: {
                                    authorization: authorizationHeader
                                }

                            }).done(function () {
                                alert("Uploded completely");
                                $("#loading-image").hide();
                                window.location.href = window.location.href;
                                //alert(idnumber)

                                //location.reload(true);
                            }).fail(function () {
                                alert("Attachemnt not uploaded data is uploaded");
                                $("#loading-image").hide();
                                window.location.href = window.location.href;
                                //alert(idnumber)

                            })
                        })
                        //alert(gender);
                    } else {
                        alert("Please attached a file");
                        $("#loading-image").hide();
                    }
                } else {
                    alert("Please mention Brighcove ID");
                    $("#loading-image").hide();
                }
            } else {
                alert("Please select Country");
                $("#loading-image").hide();
            }
        } else {
            alert("Please select Gender");
            $("#loading-image").hide();
        }
    } else {
        alert("Please mention Name");
        $("#loading-image").hide();
    }
}

function addlabel() {
    var text = $('#emp-brightcove-id').val();
    if (text !== "") {
        var xat = localStorage.getItem("up");
        //alert(xat);
        if (xat > 9) {
            localStorage.removeItem("up");
            xat = "";
            alert("Video ID limit Exceed");
            $('#add-btn').hide();
        }
        var textboxdata = $('#emp-brightcove-id').val();
        var labeldata = "";
        if (xat == "" || xat == null) {
            var i = 1;
            localStorage.setItem("up", i);
        } else {
            localStorage.setItem("up", xat);
        }
        i = localStorage.getItem("up");
        labeldata = labeldata + "<label class='bright-label' data-button='btn" + i + "' id ='" + textboxdata + "'>" + textboxdata + "</label>";
        labeldata = labeldata + "<button class='delete-bright' onclick='deletebrightcoveid();' id='btn" + i + "'>Delete</button><br/>";
        $(labeldata).appendTo('#div-brightcove');
        //alert(labeldata);
        xat = i;
        xat++;
        localStorage.setItem("up", xat);
        $('#emp-brightcove-id').val("");
    } else {
        alert("please enter video id");
    }
}

function deletebrightcoveid() {
    alert(this.id);
}



$(".delete-bright").click(function () {
    alert(this.id); // or alert($(this).attr('id'));
});

function deletelocal() {
    localStorage.removeItem('profile');
    //alert('deleted');
}




				 