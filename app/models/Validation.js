function Validation() {
    this.checkEmpty = function (value, message, spanId) {
        if (value.trim() != "") {
            document.getElementById(spanId).innerHTML = message;
            document.getElementById(spanId).style.display = "none";
            return true;
        }
        document.getElementById(spanId).innerHTML = message;
        document.getElementById(spanId).style.display = "block";
        document.getElementById(spanId).style.color = "red";
        return false;
    }

    this.checkSelect = function (selectID, message, spanId) {
        if (document.getElementById(selectID).selectedIndex != 0) {
            document.getElementById(spanId).innerHTML = message;
            document.getElementById(spanId).style.display = "none";
            return true;
        }
        document.getElementById(spanId).innerHTML = message;
        document.getElementById(spanId).style.display = "block";
        document.getElementById(spanId).style.color = "red";
        return false;
    }

    this.checkAccount = function (value, message, spanId, arrUser) {
        var isExist = false;
        isExist = arrUser.some(function (user) {
            return value.trim() == user.taiKhoan;
        })

        if (isExist) {
            document.getElementById(spanId).innerHTML = message;
            document.getElementById(spanId).style.display = "block";
            document.getElementById(spanId).style.color = "red";
            return false;
        }
        document.getElementById(spanId).innerHTML = message;
        document.getElementById(spanId).style.display = "none";
        return true;
    }

    this.checkName = function(value, message, spanId){
        var pattern = "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$";
        var reg = new RegExp(pattern);
        
        if(value.match(reg)){
            document.getElementById(spanId).innerHTML = "";
            document.getElementById(spanId).style.display = "none";
            return true;
        }
        document.getElementById(spanId).innerHTML = message;
        document.getElementById(spanId).style.display = "block";
        document.getElementById(spanId).style.color = "red";
        return false;
    }

    this.checkPass = function(value, message, spanId){
        var reg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,8}$/;
        if(value.match(reg)){
            document.getElementById(spanId).innerHTML = "";
            document.getElementById(spanId).style.display = "none";
            return true;
        }
        document.getElementById(spanId).innerHTML = message;
        document.getElementById(spanId).style.display = "block";
        document.getElementById(spanId).style.color = "red";
        return false;
    }

    this.checkEmail = function(value, message, spanId){
        var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(value.match(reg)){
            document.getElementById(spanId).innerHTML = "";
            document.getElementById(spanId).style.display = "none";
            return true;
        }
        document.getElementById(spanId).innerHTML = message;
        document.getElementById(spanId).style.display = "block";
        document.getElementById(spanId).style.color = "red";
        return false;
    }

    this.checkDescription = function(value, message, spanId){
        var reg = /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]{0,60}$/;
        if(value.match(reg)){
            document.getElementById(spanId).innerHTML = "";
            document.getElementById(spanId).style.display = "none";
            return true;
        }
        document.getElementById(spanId).innerHTML = message;
        document.getElementById(spanId).style.display = "block";
        document.getElementById(spanId).style.color = "red";
        return false;
    }

    
}
