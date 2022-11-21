/*  Origalmente veio de mainform.html un template de flask: 'Multi Step Registration'
 *   mgd 2022.11.18
 */



function validate() {
    var output = true;
    $(".signup-error").html('');

    if ($("#personal-field").css('display') != 'none') {
        if (!($("#name").val())) {
            output = false;
            $("#name-error").html("Name required!");
        }

        if (!($("#dob").val())) {
            output = false;
            $("#dob-error").html("Date of Birth required!");
        }
    }

    if ($("#password-field").css('display') != 'none') {
        if (!($("#user-password").val())) {
            output = false;
            $("#password-error").html("Password required!");
        }

        if (!($("#confirm-password").val())) {
            output = false;
            $("#confirm-password-error").html("Confirm password required!");
        }

        if ($("#user-password").val() != $("#confirm-password").val()) {
            output = false;
            $("#confirm-password-error").html("Password not matched!");
        }
    }

    if ($("#contact-field").css('display') != 'none') {
        if (!($("#phone").val())) {
            output = false;
            $("#phone-error").html("Phone required!");
        }

        if (!($("#email").val())) {
            output = false;
            $("#email-error").html("Email required!");
        }

        if (!$("#email").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
            $("#email-error").html("Invalid Email!");
            output = false;
        }

        if (!($("#address").val())) {
            output = false;
            $("#address-error").html("Address required!");
        }
    }

    return output;
}

$(document).ready(function () {
    $("#next").click(function () {
        var output = validate();
        if (output === true) {
            var current = $(".active");
            var next = $(".active").next("li");
            if (next.length > 0) {
                $("#" + current.attr("id") + "-field").hide();
                $("#" + next.attr("id") + "-field").show();
                $("#back").show();
                $("#finish").hide();
                $(".active").removeClass("active");
                next.addClass("active");
                if ($(".active").attr("id") == $("li").last().attr("id")) {
                    $("#next").hide();
                    $("#finish").show();
                }
            }
        }
    });


    $("#back").click(function () {
        var current = $(".active");
        var prev = $(".active").prev("li");
        if (prev.length > 0) {
            $("#" + current.attr("id") + "-field").hide();
            $("#" + prev.attr("id") + "-field").show();
            $("#next").show();
            $("#finish").hide();
            $(".active").removeClass("active");
            prev.addClass("active");
            if ($(".active").attr("id") == $("li").first().attr("id")) {
                $("#back").hide();
            }
        }
    });

    $("input#finish").click(function (e) {
        var output = validate();
        var current = $(".active");

        if (output === true) {
            return true;
        } else {
            //prevent refresh
            e.preventDefault();
            $("#" + current.attr("id") + "-field").show();
            $("#back").show();
            $("#finish").show();
        }
    });
});


