let checkFname = "";
let checkLname = "";
let checkCity = "";
let checkState = "";
let checkSalary = "";
let checkEmail = "";

// $('#updateBtn').attr('disabled', 'disabled');

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
        $('#updateBtn').attr('disabled', 'disabled');
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
        $('#updateBtn').attr('disabled', 'disabled');
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
        $('#updateBtn').attr('disabled', 'disabled');
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
        $('#updateBtn').attr('disabled', 'disabled');
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
        $('#updateBtn').attr('disabled', 'disabled');
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
        $('#updateBtn').attr('disabled', 'disabled');
    }
});

function checkAll() {
    if (checkFname == "true" && checkLname == "true" && checkCity == "true" && checkState == "true" && checkSalary == "true" && checkEmail == "true") {
        $('#updateBtn').removeAttr('disabled');
    }
}
