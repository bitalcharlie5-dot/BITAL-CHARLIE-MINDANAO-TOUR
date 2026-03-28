const spots = {

davao:[
{
name:"Mount Apo",
price:1500,
img:"davao/Apo.jpeg",
desc:"Mount Apo is the highest mountain in the Philippines. It is perfect for hiking and adventure lovers."
},
{
name:"Eden Nature Park",
price:800,
img:"davao/Eden.jpeg",
desc:"Eden Nature Park is a peaceful place surrounded by nature. It offers fresh air and relaxing views."
}
],

zamboanga:[
{
name:"Pink Beach",
price:1300,
img:"zamboanga/Pink.jpeg",
desc:"Pink Beach has unique pink sand and clear water. It is perfect for swimming and relaxing."
},
{
name:"Fort Pilar",
price:400,
img:"zamboanga/Pilar.jpeg",
desc:"Fort Pilar is a historic Spanish fort. It is also a religious and cultural site."
}
],

cdo:[
{
name:"White Water Rafting",
price:1500,
img:"cdo/Rafting.jpeg",
desc:"White Water Rafting offers thrilling river adventure. It is one of the top activities in CDO."
},
{
name:"Mapawa Nature Park",
price:700,
img:"cdo/Mapawa.jpeg",
desc:"Mapawa Nature Park has waterfalls and wide landscapes. It is perfect for outdoor fun."
}
],

bukidnon:[
{
name:"Dahilayan Adventure Park",
price:1200,
img:"bukidnon/Adventure.jpeg",
desc:"Dahilayan is known for zipline rides and fun activities. It has cool mountain climate."
},
{
name:"Mount Kitanglad",
price:1000,
img:"bukidnon/Mount.jpeg",
desc:"Mount Kitanglad is rich in wildlife and nature. It is perfect for trekking."
}
],

surigao:[
{
name:"Siargao Island",
price:1500,
img:"surigao/Siargao.jpeg",
desc:"Siargao is the surfing capital of the Philippines. It has beautiful beaches and lagoons."
},
{
name:"Cloud 9",
price:800,
img:"surigao/Cloud.jpeg",
desc:"Cloud 9 is a famous surfing destination. It offers strong waves and scenic views."
}
]

};

const roomDetails = {
"Standard Room":"This room is simple and affordable. It provides basic comfort for guests.",
"Deluxe Room":"This room is air-conditioned and comfortable. It includes better amenities.",
"Family Room":"This room is large and spacious. It is perfect for families or groups."
};

const foodDetails = {
"Breakfast":"Breakfast includes light meals like bread and eggs. It helps start your day with energy.",
"Lunch":"Lunch includes rice meals with meat and vegetables. It gives energy for activities.",
"Dinner":"Dinner includes full meals and delicious dishes. It is perfect after a long day.",
"Full Package":"Includes breakfast, lunch, and dinner. It provides complete meal service."
};

let selectedDesc="";

function login(){
let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

if(user && pass){
document.getElementById("loginPage").style.display="none";
document.getElementById("mainPage").style.display="block";
}else{
alert("Enter username & password");
}
}

function showSpots(place){
let container=document.getElementById("spots");
container.innerHTML="";

spots[place].forEach(s=>{
let card=document.createElement("div");
card.className="card";

card.innerHTML=`
<img src="${s.img}">
<h3>${s.name}</h3>
<p>${s.desc}</p>
<p><b>₱${s.price}</b></p>
<button onclick="selectSpot('${s.name}',${s.price},'${s.desc}')">Book</button>
`;

container.appendChild(card);
});
}

function selectSpot(name,price,desc){
document.getElementById("spot").value=name;
document.getElementById("price").value=price;
selectedDesc=desc;
}

document.getElementById("bookingForm").addEventListener("submit",function(e){
e.preventDefault();

let name=document.getElementById("name").value;
let age=document.getElementById("age").value;
let address=document.getElementById("userAddress").value;
let spot=document.getElementById("spot").value;
let room=document.getElementById("room").value;
let food=document.getElementById("food").value;
let date=document.getElementById("date").value;
let time=document.getElementById("time").value;
let days=document.getElementById("days").value;
let guests=document.getElementById("guests").value;
let price=parseFloat(document.getElementById("price").value);

let total = price * guests * days;

document.getElementById("receipt").innerHTML=`
<h3>Booking Receipt</h3>
<b>Name:</b> ${name}<br>
<b>Spot:</b> ${spot}<br>
<b>Description:</b> ${selectedDesc}<br>
<b>Room:</b> ${room} - ${roomDetails[room]}<br>
<b>Food:</b> ${food} - ${foodDetails[food]}<br>
<b>Date:</b> ${date}<br>
<b>Time:</b> ${time}<br>
<b>Total:</b> ₱${total}
`;

let table=document.querySelector("#bookingTable tbody");
let row=table.insertRow();

row.innerHTML=`
<td>${name}</td>
<td>${age}</td>
<td>${address}</td>
<td>${spot}</td>
<td>${room}</td>
<td>${food}</td>
<td>${date}</td>
<td>${time}</td>
`;

document.getElementById("bookingForm").reset();
});
