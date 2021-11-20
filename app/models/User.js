function User(id, account, nameUser, password, email, kindUser, language, description, image){
    this.id = id;
    this.taiKhoan = account;
    this.hoTen = nameUser;
    this.matKhau = password;
    this.email = email;
    this.loaiND = kindUser;
    this.ngonNgu = language;
    this.moTa = description;
    this.hinhAnh = image;
}