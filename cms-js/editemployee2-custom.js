var pathname;
$(document).ready(function () {
    pathname = window.location.href;
    pathname = pathname.split('#')[1];
    pathname = atob(pathname);
    getdataforedit();
    localStorage.removeItem("up");
});

function getdataforedit() {
    var employee = [];
    employee = JSON.parse(localStorage.getItem('profile') || []);
    for (var i = 0; i <= employee.length - 1; i++) {
        var id = pathname.split('^')[0];
        var name = pathname.split('^')[1];
        //console.log(employee);
        if (id == employee[i].id && name == employee[i].name) {
            $('#emp-name').val(employee[i].name);
            $('#gender').val(employee[i].gender);
            $('#bright-coveid').val(employee[i].brightcoveid);
            var url = "";
            url = "https://aonhewitt.cloudcms.net/proxy" + employee[i].url + "/attachments/"
            $('#profileimageedit').attr('src', url);
            var al = $('#brightcove-id').val
        }

    }

}



function deleteprofile() {
    repository = platform.readRepository(repositoryId).then(function () {
        branch = repository.readBranch(branchId).then(function () {
            var id = pathname.split('^')[0];
            var name = pathname.split('^')[1];
            var query = {
                "id": parseInt(id),
                "name": name
            };
            console.log(query);
            var pagination = {
                "sort": {
                    "name": 1
                },
                "limit": 9999
            };
            var profile = [];
            var node = branch.queryNodes(query, { "_type": "custom:profile0" }, pagination).each(function () {
                console.log(this);


            })
            node.del();
            alert("Record For" + "" + name + "deleted!!");

        }).then(function () {
            window.location.href = window.location.href;
        })
    })

}

function saveeditprofile() {
    var node;
    repository = platform.readRepository(repositoryId).then(function () {
        branch = repository.readBranch(branchId).then(function () {
            var id = pathname.split('^')[0];
            var name = pathname.split('^')[1];

            var query = {
                "id": parseInt(id),
                "name": name
            };
            var pagination = {
                "sort": {
                    "name": 1
                },
                "limit": 9999
            };
            var profile = [];
            node = branch.queryNodes(query, { "_type": "custom:profile0"
            }, pagination).each(function () {
                console.log(this.name);
                this.name = $('#emp-name').val();
                this.gender = $('#gender').val();
                this.country = "country";
                this.brightcoveid = $('#brightcove-id').val();
                this.update();
                var newCommentId = this.getId();
                console.log(newCommentId);
                var authorizationHeader = platform.getDriver().getHttpHeaders()["Authorization"];
                $.ajax({
                    type: "get",
                    url: "https://api.cloudcms.com/repositories/" + repositoryId + "/branches/" + branchId + "/nodes/" + newCommentId + "/",
                    contentType: false,
                    processData: false,
                    headers: {
                        authorization: authorizationHeader
                    }
                })
            });
            alert("Record For" + "" + name + "EDITED!!");

        }).then(function () {
            window.location.href = window.location.href;
        })
    })



}

function addlabel() {
    var text = $('#emp-brightcove-id').val();
    if (text !== "") {
        var xat = localStorage.getItem("up");
        if (xat > 9) {
            localStorage.removeItem("up");
            xat = "";
            alert("Video ID limit Exceed");
            $('#add-btn').hide();
        }
        var textboxdata = $('#brightcove-id').val();
        var labeldata = "";
        if (xat == "" || xat == null) {
            var i = 1;
            localStorage.setItem("up", i);
        } else {
            localStorage.setItem("up", xat);
        }
        i = localStorage.getItem("up");
        labeldata = labeldata + "<label class='bright-label' id ='" + textboxdata + "'>" + textboxdata + "</label>" + "<br/>";
        $(labeldata).appendTo('#brighcove-id-edit');
        xat = i;
        xat++;
        localStorage.setItem("up", xat);
        $('#emp-brightcove-id').val("");
    } else {
        alert("please enter video id");
    }
}