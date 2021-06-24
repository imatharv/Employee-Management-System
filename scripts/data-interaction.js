function getData() {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/employees',
        success: function (result) {
            appendTable(result);
        },
        error: function (result) {
            console.log(result);
        }
    });

    appendTable = (data) => {
        let row = "";
        for (let i = 0; i < data.length; i++) {
            row =
                `<tr>
                    <td>${data[i].fname}</td>
                    <td>${data[i].lname}</td>
                    <td>${data[i].city}</td>
                    <td>${data[i].state}</td>
                    <td>${data[i].salary}</td>
                    <td>${data[i].email}</td>
                    <td><button id="myBtn" class="button action-button myBtn" type="button" onclick="openModal()"><i class="bi bi-pencil-square" style="margin-right: 2px;"></i>Edit</button></td>
                    <td><button id="myDelBtn" class="button action-button myDelBtn" type="button" onclick="deleteData(${data[i].id})"><i class="bi bi-trash" style="margin-right: 2px;"></i>Delete</button></td>
                </tr>`;
            $('#tbody').append(row);
        }
    }
}
function postData() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let salary = document.getElementById("salary").value;
    let email = document.getElementById("email").value;

    let userData = {
        fname: fname,
        lname: lname,
        city: city,
        state: state,
        salary: salary,
        email: email
    }

    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/employees',
        data: userData,
        success: function (result) {
            resetFields();
            window.location.href = "/pages/app.html";
        },
        error: function (result) {
            alert(result);
        }
    });

    resetFields = () => {
        document.getElementById("fname").value = '';
        document.getElementById("lname").value = '';
        document.getElementById("city").value = '';
        document.getElementById("state").value = '';
        document.getElementById("salary").value = '';
        document.getElementById("email").value = '';
    }
}
function putData() {

}


function deleteData(id) {
    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:3000/employees/' + id,
        success: function (result) {
            alert("Record successfully deleted.");
            window.location.reload();
        },
        error: function (result) {
            alert(result);
        }
    });
}

// let fname = document.getElementById("fnameTbl").value;
// let lname = document.getElementById("lnameTbl").value;
// let city = document.getElementById("cityTbl").value;
// let state = document.getElementById("stateTbl").value;
// let salary = document.getElementById("salaryTbl").value;
// let email = document.getElementById("emailTbl").value;
