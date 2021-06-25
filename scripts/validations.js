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
    } else {
        $('.validation-container-fname.error').show();
        checkFname = "false";
    }
    checkAll();
});
$('#lname').on('keyup', function () {
    $('.validation-container-lname').hide();
    let lName = lnameRegExp.test($(this).val());
    if (lName == true) {
        $('.validation-container-lname.success').show();
        checkLname = "true";
    } else {
        $('.validation-container-lname.error').show();
        checkLname = "false";
    }
    checkAll();
});
$('#city').on('keyup', function () {
    $('.validation-container-city').hide();
    let City = cityRegExp.test($(this).val());
    if (City == true) {
        $('.validation-container-city.success').show();
        checkCity = "true";
    } else {
        $('.validation-container-city.error').show();
        checkCity = "false";
    }
    checkAll();
});
$('#state').on('keyup', function () {
    $('.validation-container-state').hide();
    let State = stateRegExp.test($(this).val());
    if (State == true) {
        $('.validation-container-state.success').show();
        checkState = "true";
    } else {
        $('.validation-container-state.error').show();
        checkState = "false";
    }
    checkAll();
});
$('#salary').on('keyup', function () {
    $('.validation-container-salary').hide();
    let Salary = salaryRegExp.test($(this).val());
    if (Salary == true) {
        $('.validation-container-salary.success').show();
        checkSalary = "true";
    } else {
        $('.validation-container-salary.error').show();
        checkSalary = "false";
    }
    checkAll();
});
$('#email').on('keyup', function () {
    $('.validation-container-email').hide();
    let email = emailRegExp.test($(this).val());
    if (email == true) {
        $('.validation-container-email.success').show();
        checkEmail = "true";
    } else {
        $('.validation-container-email.error').show();
        checkEmail = "false";
    }
    checkAll();
});

function checkAll() {
    if (checkFname == "true" && checkLname == "true" && checkCity == "true" && checkState == "true" && checkSalary == "true" && checkEmail == "true") {
        $('#submit').removeAttr('disabled');
    }
}

