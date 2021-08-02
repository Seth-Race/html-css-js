const baseurl = "http://localhost:8080/api/users";

$(() => {
    $("#getid").on("click", () => {
        var userId = $("#zId").val();
        getUserById(userId);
    })
});

$(() => {
    $("#save").on("click", () => {
        let user = {};
        getFromPage(user);
        updateUser(user);
    })
})

const updateUser = (user) => {
    user.id = Number(user.id);
    console.log(user);
    $.ajax({
            method: "PUT",
            url: `${baseurl}/`,
            data: JSON.stringify(user),
            contentType: "application/json"
    })
        .done(res => {
            console.log("Update successful!");
        })
        .fail(err => {
            console.error(err);
        });
};



const display = (user) => {
    $("#xId").val(user.id);
    $("#xUsername").val(user.username);
    $("#xPassword").val(user.password);
    $("#xFirstName").val(user.firstName);
    $("#xLastName").val(user.lastName);
    $("#xPhone").val(user.phone);
    $("#xEmail").val(user.email);
    $("#xReviewer").prop("checked", user.reviewer);
    $("#xAdmin").prop("checked", user.admin);
};

const getFromPage = (user) =>{
    user.id = $("#xId").val();
    user.username = $("#xUsername").val();
    user.password = $("#xPassword").val();
    user.firstName = $("#xFirstName").val();
    user.lastName = $("#xLastName").val();
    user.phone = $("#xPhone").val();
    user.email = $("#xEmail").val();
    user.reviewer = $("#xReviewer").prop("checked");
    user.admin = $("#xAdmin").prop("checked");
}

const getUserById = (userId) => {

    $.getJSON(`${baseurl}/${userId}`)

    .done(res => {
        console.debug(res);
        display(res);
    })

    .fail(err => { 
        console.error(err); 
    });
};