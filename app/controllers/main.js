var service = new listUser();
var validation = new Validation();


function getEle(id) {
    return document.getElementById(id);
}

// get list user
function getListUser() {
    service.getListUserApi()
        .then(function (result) {
            renderData(result.data);
        })
        .catch(function (error) {
            console.log(error)
        })
}
getListUser();

// show table
function renderData(data) {
    var content = "";
    data.forEach(function (item, index) {
        var trUser = `<tr>
            <td>${index + 1}</td>
            <td>${item.taiKhoan}</td>
            <td>${item.matKhau}</td>
            <td>${item.hoTen}</td>
            <td>${item.email}</td>
            <td>${item.ngonNgu}</td>
            <td>${item.loaiND}</td>
            <td>
                <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editInfoUser(${item.id})">Edit</button>
                <button class="btn btn-danger" onclick="deleteUser(${item.id})">Delete</button>
            </td>
        </tr>`
        content += trUser;
    })

    getEle("tblDanhSachNguoiDung").innerHTML = content;
}


// Modal add user
getEle("btnThemNguoiDung").addEventListener("click", function () {
    document.getElementsByClassName("modal-title")[0].innerHTML = "Add User";
    document.getElementsByClassName("modal-footer")[0].innerHTML = `<button class="btn btn-success" onclick="addUser()">Add User</button>`
})

// Modal info user
function editInfoUser(id) {
    document.getElementsByClassName("modal-title")[0].innerHTML = "Edit User";
    document.getElementsByClassName("modal-footer")[0].innerHTML = `<button class="btn btn-success" onclick="updateUser(${id})">Update User</button>`;
    getEle("TaiKhoan").disabled = true;
    clearNotification();

    service.getUserById(id)
        .then(function (result) {
            getEle("TaiKhoan").value = result.data.taiKhoan;
            getEle("HoTen").value = result.data.hoTen;
            getEle("MatKhau").value = result.data.matKhau;
            getEle("Email").value = result.data.email;
            getEle("HinhAnh").value = result.data.hinhAnh;
            getEle("loaiNguoiDung").value = result.data.loaiND;
            getEle("loaiNgonNgu").value = result.data.ngonNgu;
            getEle("MoTa").value = result.data.moTa;
        })
        .catch(function (error) {
            console.log(error)
        })

}

// delete User
function deleteUser(id) {
    service.deleteUserApi(id)
        .then(function (result) {
            alert("Delete success!");
            getListUser();
        })
        .catch(function (error) {
            console.log(error)
        })
}

// add User
function addUser() {
    var account = getEle("TaiKhoan").value;
    var nameUser = getEle("HoTen").value;
    var password = getEle("MatKhau").value;
    var email = getEle("Email").value;
    var image = getEle("HinhAnh").value;
    var kindUser = getEle("loaiNguoiDung").value;
    var language = getEle("loaiNgonNgu").value;
    var description = getEle("MoTa").value;

    service.getListUserApi()
        .then(function (result) {
            var isValid = true;
            isValid &= validation.checkEmpty(account, "T??i kho???n kh??ng ???????c ????? tr???ng", "tbTK") && validation.checkAccount(account, "T??i kho???n kh??ng ???????c tr??ng", "tbTK", result.data);
            isValid &= validation.checkEmpty(nameUser, "H??? v?? t??n kh??ng ???????c ????? tr???ng", "tbHT") && validation.checkName(nameUser, "H??? v?? t??n kh??ng ???????c ch???a s??? v?? k?? t??? ?????c bi???t", "tbHT");
            isValid &= validation.checkEmpty(password, "M???t kh???u kh??ng ???????c ????? tr???ng", "tbMK") && validation.checkPass(password, "M???t kh???u c?? ??t nh???t 1 k?? t??? hoa, 1 k?? t??? ?????c bi???t, 1 k?? t??? s???, ????? d??i t??? 6 ?????n 8 k?? t???", "tbMK");
            isValid &= validation.checkEmpty(email, "Email kh??ng ???????c ????? tr???ng", "tbEmail") && validation.checkEmail(email, "Email ph???i ????ng ?????nh d???ng (example@email.com)", "tbEmail");
            isValid &= validation.checkEmpty(image, "H??nh ???nh kh??ng ???????c ????? tr???ng", "tbHA");
            isValid &= validation.checkSelect("loaiNguoiDung", "Vui l??ng ch???n lo???i ng?????i d??ng", "tbLND");
            isValid &= validation.checkSelect("loaiNgonNgu", "Vui l??ng ch???n lo???i ng??n ng???", "tbNN");
            isValid &= validation.checkEmpty(description, "M?? t??? kh??ng ???????c ????? tr???ng", "tbMT") && validation.checkDescription(description, "M?? t??? kh??ng ???????c qu?? 60 k?? t???", "tbMT");

            if (isValid) {
                var user = new User("", account, nameUser, password, email, kindUser, language, description, image);
                service.addUserApi(user)
                    .then(function (result) {
                        document.getElementsByClassName("close")[0].click();
                        getListUser();
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
            }
        })
        .catch(function (error) {
            console.log(error)
        })

}


// update User
function updateUser(id) {
    var account = getEle("TaiKhoan").value;
    var nameUser = getEle("HoTen").value;
    var password = getEle("MatKhau").value;
    var email = getEle("Email").value;
    var image = getEle("HinhAnh").value;
    var kindUser = getEle("loaiNguoiDung").value;
    var language = getEle("loaiNgonNgu").value;
    var description = getEle("MoTa").value;

    var user = new User(id, account, nameUser, password, email, kindUser, language, description, image);
    service.updateUserApi(user)
        .then(function (result) {
            document.getElementsByClassName("close")[0].click();
            getListUser();
        })
        .catch(function (error) {
            console.log(error);
        })
}

// clear field
getEle("btnThemNguoiDung").addEventListener("click", function () {
    getEle("TaiKhoan").value = "";
    getEle("HoTen").value = "";
    getEle("MatKhau").value = "";
    getEle("Email").value = "";
    getEle("HinhAnh").value = "";
    getEle("loaiNguoiDung").selectedIndex = 0;
    getEle("loaiNgonNgu").selectedIndex = 0;
    getEle("MoTa").value = "";

    clearNotification();
    getEle("TaiKhoan").disabled = false;
})

function clearNotification() {
    getEle("tbTK").style.display = "none";
    getEle("tbHT").style.display = "none";
    getEle("tbMK").style.display = "none";
    getEle("tbEmail").style.display = "none";
    getEle("tbHA").style.display = "none";
    getEle("tbLND").style.display = "none";
    getEle("tbNN").style.display = "none";
    getEle("tbMT").style.display = "none";
}






