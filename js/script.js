
let userId = localStorage.getItem("username");
let pass = localStorage.getItem("password");


window.addEventListener("load", () => {
    if(userId != null && pass != null) {
        location.href = "../product.html";
    }
})



let userName = document.getElementById("user-name");
let passWord = document.getElementById("password");
let submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if(userName.value !== passWord.value) {
        alert("Please enter valid credentials!")
        userName.value = "";
        passWord.value = "";
        
    }
    else {
        alert("Login Successful");
        location.href = "../product.html"
        localStorage.setItem("username", userName.value);
        localStorage.setItem("password", passWord.value);
    }
})