let email = 'admin@gmail.com';
let password = 'admin12345';

let result1 = document.getElementById('email0');
let result2 = document.getElementById('password0');
let btn = document.getElementById("btn")


btn.onclick = function () {
    if (result1.value === email && result2.value === password) {
        alert("CORRECT")
    }else if (result1.value !== email && result2.value === password) {
        alert("Your email is not correct!")
    }else if (result1.value === email && result2.value !== password) {
        alert("Your password is not correct!")
    }
    else {
        alert("WRONG")
    }
}


