﻿// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $("#calculateButton").click(function () {
        var hours = $("#hoursInput").val();
        var rate = $("#rate").val();
        if (hours > 0) {
            var total = hours * rate;
            $("#totalOutput").text("Total: $" + total.toFixed(2));
        } else {
            alert("Please enter a positive number of hours.");
        }
    });
});
