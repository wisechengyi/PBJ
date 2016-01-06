/**
 * Created by yicheng3 on 5/3/15.
 */

$(function () {

    var submitButtons = $("button");
    var submitButton;
    for (var i = 0; i < submitButtons.length; i++) {
        if (submitButtons[i].innerText == "Comment") {
            submitButton = submitButtons[i];
            break;
        }
    }

    var previousValue;
    var newButton = $('<button>', {
        text: "CI this",
        class: "btn btn-primary",
    });
    $(newButton)
        .mouseover(function () {
            previousValue = $("#new_comment_field").val();
            $("#new_comment_field").val("CI this");
        })
        .mouseout(function () {
            $("#new_comment_field").val(previousValue);
        });
    $(submitButton).parent().append(newButton);
});
