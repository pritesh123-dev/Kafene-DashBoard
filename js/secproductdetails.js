// product page
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
            addInOrdersPage(ordersData[i].id, ordersData[i].medicineName, ordersData[i].medicineBrand, ordersData[i].expiryDate, ordersData[i].unitPrice, ordersData[i].prescriptionRequired, ordersData[i].stock)
    }
  }
};
xhttp.open(
  "GET",
  "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products",
  true
);
xhttp.send();

let logout = document.getElementById("logout");

logout.addEventListener("click", () => {
  localStorage.clear();
  location.href = "../index.html";
});

const compareDates = (d1, d2) => {
    let date1 = new Date(d1).getTime();
    let date2 = new Date(d2).getTime();
  
    if (date1 < date2) {
      return false;
    } else if (date1 > date2) {
      return true;
    } else {
      console.log(`Both dates are equal`);
    }
  };

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = today.getMonth() + 1 
var yyyy = today.getFullYear();

let month = "";
switch(mm) {
    case 1:
      month = "Jun"
      break;
    case 2:
      month = "Feb"
      break;
    case 3:
      month = "Mar"
      break;
    case 4:
      month = "Apr"
      break;
    case 5:
      month = "May"
      break;
    case 6:
      month = "Jun"
      break;
    case 7:
      month = "Jul"
      break;
    case 8:
      month = "Aug"
      break;
    case 9:
      month = "Sep"
      break;
    case 10:
      month = "Oct"
      break;
    case 11:
      month = "Nov"
      break;
    case 12:
      month = "Dec"
      break;
    default:
      month = "not a month"
  }

currentDate = `${dd}-${month}-${yyyy}`




let orderData = document.querySelector("#details-report table")
let size = 0;
let count = document.getElementById("count");

let addInOrdersPage = (id, medicineName, medicineBrand, expiryDate, unitPrice, prescriptionRequired, stock) => {
    let orderPageData = `<tr class=${stock < 100 ? "low" : ""}${compareDates(expiryDate, currentDate) ? "" : "gone"}>
    <td class="gray">${id}</td>
    <td class="black">${medicineName}</td>
    <td class="gray">${medicineBrand}</td>
    <td class="black">${expiryDate}</td>
    <td class="gray">${unitPrice}</td>
    <td class="gray">${stock}</td>
    </tr>`
    orderData.innerHTML += orderPageData;
    size++;
    count.innerHTML = size;
};
size = count.innerHTML;
let lowstock = document.getElementById("lowstock");

let low = document.getElementsByClassName("low")

lowstock.addEventListener("click", () => {
    if(lowstock.checked == true) {
        for(let i = 0; i < low.length; i++) {
            low[i].classList.remove("hide");
      count.innerHTML = 29
    }
}
else {
    for(let i = 0; i < low.length; i++) {
        low[i].classList.add("hide");
        count.innerHTML = 29 - low.length;
    }
}
})
let expired = document.getElementById("expired");
let gone = document.getElementsByClassName("gone")

expired.addEventListener("click", () => {
    if(expired.checked == true) {
      console.log("hii")

    for(let i = 0; i < gone.length; i++) {
      gone[i].classList.remove("hide");
      count.innerHTML = 29
    }
  }
  else {
    for(let i = 0; i < gone.length; i++) {
      gone[i].classList.add("hide");
      count.innerHTML = 29 - gone.length;
    }
  }
});





















    




