function listUser() {
    this.getListUserApi = function () {
        return axios({
            url: "https://6194b61674c1bd00176c689e.mockapi.io/api/user",
            method: "GET",
        })
    }

    this.deleteUserApi = function (id) {
        return axios({
            url: `https://6194b61674c1bd00176c689e.mockapi.io/api/user/${id}`,
            method: "DELETE",
        })
    }

    this.addUserApi = function (user) {
        return axios({
            url: `https://6194b61674c1bd00176c689e.mockapi.io/api/user`,
            method: "POST",
            data: user,
        })
    }

    this.getUserById = function (id) {
        return axios({
            url: `https://6194b61674c1bd00176c689e.mockapi.io/api/user/${id}`,
            method: "GET",
        })
    }

    this.updateUserApi = function(user){
        return axios({
            url: `https://6194b61674c1bd00176c689e.mockapi.io/api/user/${user.id}`,
            method: "PUT",
            data: user,
        });
    }
    
    
}