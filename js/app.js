function LoginSuccess(response) {                                              // following function will run if the api request is successful
    document.getElementById(`login_body`).insertAdjacentHTML(                  // gets the id login body and inserts h1 tag in login body 
        `afterbegin`,
        `<h1>Successfully logged in</h1>`)
    Cookies.set(`Token`, `${response[`data`][`token`]}`)                       // sets the cookie name to Token and the value to response (obj), data (obj), token(string),
    location.href = `home.html`                                                // brings you to the home page
}


function LoginFail(error) {                                                    // following function will run if the api request fails
    document.getElementById(`login_body`).insertAdjacentHTML(                  // gets the id login body and inserts h1 tag in login body 
        `afterbegin`,
        `<h1>login was invalid</h1>`)
}



function AccountLogin(details) {                                               

    let email = document.getElementById(`username`)[`value`];                  // gets the id username and takes the value(whatever is typed in) and sets in as variable email
    let password = document.getElementById(`password`)[`value`];               // gets the id password and takes the value(whatever is typed in) and sets in as variable password


    axios.request({                                                            // axiox POST request that gets the api(url) and sends the email and password to a server (what it would do) 

        url: `https://reqres.in/api/login`,
        method: `POST`,
        data: {
            email: email,
            password: password
        }

    }).then(LoginSuccess).catch(LoginFail)
}

let login_button = document.getElementById(`login_button`).addEventListener(`click`, AccountLogin)  //gets the login_button id set as the variable login_button added an eventlistener that will run the function AccountLogin when clicked
                                                                                                    