function colorsuccess(response) {

let Token = Cookies.get(`Token`);                                                                   // gets the cookie Token and sets it as the vriable Token
if (Token !== undefined) {                                                                          // if the Token is defined it will continue the code if it isnt it will go to the else 
  for (let i = 0; i < response[`data`][`data`].length; i++) {                                       //set 0 as variable i, if i is less then the respone(obj), data(obj), data(array) lenth counter will increment by 1
document.getElementById(`home_section`).insertAdjacentHTML(`afterbegin`,                            // gets the id home_section from html and inserts the Color, year and a color swatch by going into response, data, data, counter# and displaying whats called for
    `<h1>Welcome</h1>
    <h1>Color:${response[`data`][`data`][i][`name`]}</h1>
    <p>Year:${response[`data`][`data`][i][`year`]}</p>
    <input type="color"  value="${response[`data`][`data`][i][`color`]}">
    `)
    }
}else{

document.body.insertAdjacentHTML(`afterbegin`,                                                         //if the token doesnt exist it will insert a h1 tag abd a button for you to go back                                  
  `<h1>you're not suppose to be here</h1>
    <button>back</button>`)

}
}


function colorfail(error) {                                                                             // if it fails the fetch the api it will insert a h1 tag on the page
document.getElementById(`home_section`).insertAdjacentHTML(`afterbegin`,
        `<h1>couldnt load page</h1>`)
}


axios.request({                                                                                       // requests the api thenwill go to success or fail function

    url: `https://reqres.in/api/unknown`

}).then(colorsuccess).catch(colorfail)
