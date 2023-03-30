// Users page
let userId = localStorage.getItem("username");
let pass = localStorage.getItem("password");


window.addEventListener("load", () => {
    if(userId == null && pass == null) {
        location.href = "../index.html";
    }
})


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = (request) => {
  if (
    request.currentTarget.readyState == 4 &&
    request.currentTarget.status == 200
  ) {
    let ordersData = JSON.parse(request.currentTarget.responseText);
    
    for(let i = 0; i < ordersData.length; i++) {
        addInOrdersPage(ordersData[i].id, ordersData[i].profilePic, ordersData[i].fullName, ordersData[i].dob, ordersData[i].gender, ordersData[i].currentCity, ordersData[i].currentCountry)
    }
  }
};
xhttp.open(
  "GET",
  "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users",
  true
);
xhttp.send();

let logout = document.getElementById("logout");

logout.addEventListener("click", () => {
  localStorage.clear();
  location.href = "../index.html";
});








let orderData = document.querySelector("#details-report table")
let size = 0;
// let count = document.getElementById("count");

let addInOrdersPage = (id, profilePic, fullName, dob, gender, currentCity, currentCountry) => {
    let orderPageData = `<tr class="table-search">
    <td class="gray">${id}</td>
    <td class="gray"><img src=${profilePic}></td>
    <td class="gray">${fullName}</td>
    <td class="black">${dob}</td>
    <td class="gray">${gender}</td>
    <td class="gray">${currentCity}, ${currentCountry}</td>
    </tr>`
    orderData.innerHTML += orderPageData;
};



// search

let searchInput = document.getElementsByClassName("search");

searchInput[0].addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        if(e.target.value.length >= 2) {
            let tableSearch = document.getElementsByClassName("table-search");
            for(let i = 0; i < tableSearch.length; i++) {
                if(tableSearch[i].children[2].textContent.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1) {
                    tableSearch[i].classList.remove("hide")
                }
                else {
                    tableSearch[i].classList.add("hide")
                }
            }
        }
        else {
            alert("Please enter at least 2 characters");
            e.target.value = ""
        }


    }
})

let resetBtn = document.getElementsByClassName("reset-btn");

resetBtn[0].addEventListener("click", () => {
    let hide = document.getElementsByClassName("hide");
    for(let i = 0; i < hide.length; i++) {
        hide[i].classList.remove("hide")
    }
    searchInput[0].value = "";
    location.href = "../users.html";
})


















    




