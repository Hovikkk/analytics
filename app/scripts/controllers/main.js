'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
    .controller('MainCtrl', function () {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
    });

function hide(target) {
    document.getElementById(target).style.display = 'none';
}

//$(document).ready(function(){
//
//    $("a").click(function(event){
//
//        alert("As you can see, the link no longer took you to jquery.com");
//
//        event.preventDefault();
//
//    });
//
//});
$(document).ready(function(){
    //$(".closeIcon").click(function () {
    //    $(".views").hide()
    //});


    $('#registration-form').validate({
        rules: {
            name: {
                required: true
            },

            username: {
                minlength: 6,
                required: true
            },

            password: {
                required: true,
                minlength: 6
            },
            confirm_password: {
                required: true,
                minlength: 6,
                equalTo: "#password"
            },

            email: {
                required: true,
                email: true
            },


            address: {
                minlength: 10,
                required: true
            },

            capcha: {
                required: false
            },

            agree: "required"

        },

        highlight: function (element) {
            $(element).closest('.control-group').removeClass('success').addClass('error')
            ;
        },
        success: function (element) {
            element
                .text('OK!').addClass('valid')
                .closest('.control-group').removeClass('error').addClass('success');

        }
    });

});


