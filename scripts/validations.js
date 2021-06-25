let checkFname = "";
let checkLname = "";
let checkCity = "";
let checkState = "";
let checkSalary = "";
let checkEmail = "";

$('#submit').attr('disabled', 'disabled');

var fnameRegExp = /^[A-Z]{1}[a-z]{2,}/;
var lnameRegExp = /^[A-Z]{1}[a-z]{2,}/;
var cityRegExp = /^[A-Z]{1}[a-z]{2,}/;
var stateRegExp = /^[A-Z]{1}[a-z]{2,}/;
var salaryRegExp = /^[1-9]{1}[0-9]{3,}/;
var emailRegExp = /^[A-Za-z0-9]+([._+-][A-Za-z0-9]+)*@[A-Za-z0-9]+.[A-Za-z]{2,4}([.][A-Za-z]{2})*$/;

$('#fname').on('keyup', function () {
    $('.validation-container-fname').hide();
    let fName = fnameRegExp.test($(this).val());
    if (fName == true) {
        $('.validation-container-fname.success').show();
        checkFname = "true";
        checkAll();
    } else {
        $('.validation-container-fname.error').show();
        checkFname = "false";
    }
});
$('#lname').on('keyup', function () {
    $('.validation-container-lname').hide();
    let lName = lnameRegExp.test($(this).val());
    if (lName == true) {
        $('.validation-container-lname.success').show();
        checkLname = "true";
        checkAll();
    } else {
        $('.validation-container-lname.error').show();
        checkLname = "false";
    }
});
$('#city').on('keyup', function () {
    $('.validation-container-city').hide();
    let City = cityRegExp.test($(this).val());
    if (City == true) {
        $('.validation-container-city.success').show();
        checkCity = "true";
        checkAll();
    } else {
        $('.validation-container-city.error').show();
        checkCity = "false";
    }
});
$('#state').on('keyup', function () {
    $('.validation-container-state').hide();
    let State = stateRegExp.test($(this).val());
    if (State == true) {
        $('.validation-container-state.success').show();
        checkState = "true";
        checkAll();
    } else {
        $('.validation-container-state.error').show();
        checkState = "false";
    }
});
$('#salary').on('keyup', function () {
    $('.validation-container-salary').hide();
    let Salary = salaryRegExp.test($(this).val());
    if (Salary == true) {
        $('.validation-container-salary.success').show();
        checkSalary = "true";
        checkAll();
    } else {
        $('.validation-container-salary.error').show();
        checkSalary = "false";
    }
});
$('#email').on('keyup', function () {
    $('.validation-container-email').hide();
    let email = emailRegExp.test($(this).val());
    if (email == true) {
        $('.validation-container-email.success').show();
        checkEmail = "true";
        checkAll();
    } else {
        $('.validation-container-email.error').show();
        checkEmail = "false";
    }
});

function checkAll() {
    if (checkFname == "true" && checkLname == "true" && checkCity == "true" && checkState == "true" && checkSalary == "true" && checkEmail == "true") {
        $('#submit').removeAttr('disabled');
    }
}

//-------------------------------------------------------------------------------

// $('.form-input').on('keyup', function () {
//     Validation logic goes here
// });

// fnameRegExp.test($('#fname').val()) ? $('.validation-container.success').show() : $('.validation-container.error').show();
    
//-------------------------------------------------------------------------------

// window.onload = function(){
//     var inputs = document.getElementsByClassName(".form-input");
//     if(inputs){
//         for(var i=0; i<inputs.length; i++){
//             inputs[i].addEventListener("keyup",validateInput);
//         }
//     }
// };
// function validateInput(){
//     if (this.value == "") {
//         $('.validation-container-email.error').show();
//     } else {
//         $('.validation-container-email.success').show();
//     }
// }
