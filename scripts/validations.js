let checkFname = '';
let checkLname = '';
let checkCity = '';
let checkState = '';
let checkSalary = '';
let checkEmail = '';

let success = '';
let error = '';
let check = '';

var regexs = {
    'fname': /^[A-Z]{1}[a-z]{2,}/,
    'lname': /^[A-Z]{1}[a-z]{2,}/,
    'city': /^[A-Z]{1}[a-z]{2,}/,
    'state': /^[A-Z]{1}[a-z]{2,}/,
    'salary': /^[1-9]{1}[0-9]{3,}/,
    'email': /^[A-Za-z0-9]+([._+-][A-Za-z0-9]+)*@[A-Za-z0-9]+.[A-Za-z]{2,4}([.][A-Za-z]{2})*$/
};

// $('#submit').attr('disabled', 'disabled');

$('input[type = text]').on('keyup', function () {
    let type = $(this).attr('id');
    //let expression = type + 'RegExp';
    //let expression = getRegex(type);
    let expression = regexs[type];

    $(this).parent().find('.validation-container').hide();
    check = expression.test($(this).val());
    success = $(this).parent().find('.validation-container.success');
    wrong = $(this).parent().find('.validation-container.error');

    message = $(this).parent().find('.validation-message');

    validateInput(check, success, wrong, message);
});
function validateInput(check, success, wrong, message) {
    if (check) {
        $(success).show();
        $(message).attr('display', 'none');
        checkAll();
    } else {
        $(wrong).show();
    }
}
function checkAll() {
    if ($('#fname').val() && $('#lname').val() && $('#city').val() && $('#state').val() && $('#salary').val() && $('#email').val()) {
        $('#submit').removeAttr('disabled');
    }
    // else {
    //     $('#submit').attr('disabled', 'disabled');
    // }
}

// $('#fname').on('keyup', function () {
//     $('.validation-container-fname').hide();
//     check = fnameRegExp.test($(this).val());
//     success = ".validation-container-fname.success";
//     wrong = ".validation-container-fname.error";
//     validateInput(check, success, wrong);
// });
// $('#lname').on('keyup', function () {
//     $('.validation-container-lname').hide();
//     check = lnameRegExp.test($(this).val());
//     success = ".validation-container-lname.success";
//     wrong = ".validation-container-lname.error";
//     validateInput(check, success, wrong);
// });
// $('#city').on('keyup', function () {
//     $('.validation-container-city').hide();
//     check = cityRegExp.test($(this).val());
//     success = ".validation-container-city.success";
//     wrong = ".validation-container-city.error";
//     validateInput(check, success, wrong);
// });
// $('#state').on('keyup', function () {
//     $('.validation-container-state').hide();
//     check = stateRegExp.test($(this).val());
//     success = ".validation-container-state.success";
//     wrong = ".validation-container-state.error";
//     validateInput(check, success, wrong);
// });
// $('#salary').on('keyup', function () {
//     $('.validation-container-salary').hide();
//     check = salaryRegExp.test($(this).val());
//     success = ".validation-container-salary.success";
//     wrong = ".validation-container-salary.error";
//     validateInput(check, success, wrong);
// });
// $('#email').on('keyup', function () {
//     $('.validation-container-email').hide();
//     check = emailRegExp.test($(this).val());
//     success = ".validation-container-salary.success";
//     wrong = ".validation-container-salary.error";
//     validateInput(check, success, wrong);
// });

