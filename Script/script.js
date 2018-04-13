$(document).ready(function () {
    $("#btnSend").click(function () {
        var name = $("#firstname").val();
        var lastName = $("#lastname").val();
        var email = $("#email").val();
        var comment = $("#comment").val();
        if (name != "") {
            $("#firstname").next().text("");
            if (lastName != "") {
                $("#lastname").next().text("");
                if (email != "") {
                    $("#email").next().text("");
                    if (comment != "") {
                        $("#comment").next().text("");
                        $("#firstname").val("");
                        $("#lastname").val("");
                        $("#email").val("");
                        $("#comment").val("");
                        alert("Your message has been sent");
                    }
                    else {
                        $("#comment").next().text("Comment is required");
                        $("#comment").focus();
                    }
                } else {
                    $("#email").next().text("Email is required");
                    $("#email").focus();
                }
            }
            else {
                $("#lastname").next().text("Lastname is required");
                $("#lastname").focus();
            }
        }
        else {
            $("#firstname").next().text("Firstname is required");
            $("#firstname").focus();
        }
    });
});