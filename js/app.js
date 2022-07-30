function LoginSuccess (response) {
let login_body = document.getElementById(`login_body`).insertAdjacentHTML(`afterbegin`,
 `<h1>Successfully logged in</h1>`)
 Cookies.set(`Token`, `${response[`data`][`token`]}`)
}


function LoginFail (error) {
    let login_body = document.getElementById(`login_body`).insertAdjacentHTML(`afterbegin`,
    `<h1>login was invalid</h1>`)
}

function AccountLogin (details) {

let username = document.getElementById(`username`)[`value`];
let password = document.getElementById(`password`)[`value`];


axios.request({

url: `https://reqres.in/api/login`,
method: `POST`,
data: {
    username: `michael.lawson@reqres.in`,
    password: `Ducks`
}

}).then(LoginSuccess).catch(LoginFail)
}

let login_button = document.getElementById(`login_button`).addEventListener(`click`, AccountLogin)
