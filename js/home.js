

function colorsuccess(response) {

let Token = Cookies.get(`Token`);
if (Token !== undefined) {
  for (let i = 0; i < response[`data`][`data`].length; i++) {
    let home_section = document.getElementById(`home_section`).insertAdjacentHTML(`afterbegin`,
    `<h1>Welcome</h1>
    <h1>Color:${response[`data`][`data`][i][`name`]}</h1>
    <p>Year:${response[`data`][`data`][i][`year`]}</p>
    <input type="color"  value="${response[`data`][`data`][i][`color`]}">
    `)
    }
}else{

  let back_button = document.body.insertAdjacentHTML(`afterbegin`, `
    <h1>you're not suppose to be here</h1>
    <button>back</button>`)

}
}


function colorfail(error) {
    let home_section = document.getElementById(`home_section`).insertAdjacentHTML(`afterbegin`,
        `<h1>couldnt load page</h1>`)
}


axios.request({

    url: `https://reqres.in/api/unknown`

}).then(colorsuccess).catch(colorfail)


function logout (details) {

let Token = Cookies.get(`Token`);
if (Token !== undefined) {
    document.body.insertAdjacentHTML(`afterbegin` `
    <button id="logout button">Logout</button>

    `)
    Cookies.remove(`Token`);
}

}

