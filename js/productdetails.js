// orders page

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
            addInOrdersPage(ordersData[i].id, ordersData[i].customerName, ordersData[i].orderDate, ordersData[i].orderTime, ordersData[i].amount, ordersData[i].orderStatus)
    }
  }
};
xhttp.open(
  "GET",
  "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders",
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
let count = document.getElementById("count");

let addInOrdersPage = (id, customerName, orderDate, orderTime, amount, orderStatus) => {
    let orderPageData = `<tr class=${orderStatus}>
    <td class="gray">${id}</td>
    <td class="black">${customerName}</td>
    <td class="black">${orderDate}<span class="gray">${orderTime}</span></td>
    <td class="gray">${amount}</td>
    <td class="black">${orderStatus}</td>
    </tr>`
    orderData.innerHTML += orderPageData;
    size++;
    count.innerHTML = size;
};
size = count.innerHTML;
let newId = document.getElementById("new");
let packed = document.getElementById("packed");
let intransit = document.getElementById("intransit");
let delivered = document.getElementById("delivered");
let newelements = document.getElementsByClassName("New")
let packedelements = document.getElementsByClassName("Packed")
let intransitelements = document.getElementsByClassName("InTransit")
let deliveredelements = document.getElementsByClassName("Delivered")
newId.addEventListener("click", () => {
  if(newId.checked == true) {
    for(let i = 0; i < newelements.length; i++) {
      newelements[i].classList.remove("hide");
      count.innerHTML = 11
    }
  }
  else {
    for(let i = 0; i < newelements.length; i++) {
      newelements[i].classList.add("hide");
      count.innerHTML = 11 - newelements.length;
    }
  }
})
packed.addEventListener("click", () => {
  if(packed.checked == true) {
    for(let i = 0; i < packedelements.length; i++) {
      packedelements[i].classList.remove("hide");
      count.innerHTML = 11
    }
  }
  else {
    for(let i = 0; i < packedelements.length; i++) {
      packedelements[i].classList.add("hide");
      count.innerHTML = 11 - packedelements.length;
    }
  }
})
intransit.addEventListener("click", () => {
  if(intransit.checked == true) {
    for(let i = 0; i < intransitelements.length; i++) {
      intransitelements[i].classList.remove("hide");
      count.innerHTML = 11
    }
  }
  else {
    for(let i = 0; i < intransitelements.length; i++) {
      intransitelements[i].classList.add("hide");
      count.innerHTML = 11 - intransitelements.length
    }
  }
})
delivered.addEventListener("click", () => {
  if(delivered.checked == true) {
    for(let i = 0; i < deliveredelements.length; i++) {
      deliveredelements[i].classList.remove("hide");
      count.innerHTML = 11
    }
  }
  else {
    for(let i = 0; i < deliveredelements.length; i++) {
      deliveredelements[i].classList.add("hide");
      count.innerHTML = 11 - deliveredelements.length
    }
  }
})




















    




