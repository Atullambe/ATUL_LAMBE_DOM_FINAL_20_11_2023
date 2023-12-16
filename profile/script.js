// function profileData(data){
//     console.log(data);
//     alert("he,lo")

// }
// export default profileData;
const storedUsers = JSON.parse(localStorage.getItem('loginData')) || [];
console.log(storedUsers)
storedUsers.name==undefined?document.getElementById("name").innerHTML=`<h1>click on sign up</h1>`:document.getElementById("name").innerHTML=`${storedUsers.name}`

const order = JSON.parse(localStorage.getItem('booking')) || [];
console.log(order)
const {date,time}=order;
console.log(date)
date==null?document.getElementById("date").innerHTML=`<a class="nav-link" target="_blank" href="../reservation/index.html"><h1 style="margin-top:-1rem;color:red" >click me for booking </h1></a>` :document.getElementById("date").innerHTML=`${date}`