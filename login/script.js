
async function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
     console.log(password)
    // Check if the username and password match a stored user
    const storedUsers = JSON.parse(localStorage.getItem('loginData')) || [];

console.log(storedUsers)
    // const user = await storedUsers.find(
        
    //     (row) => {return row.email === email && row.password === password});
    // console.log(user)
   
    if (storedUsers.email === email && storedUsers.password === password) {
      alert('Login successful!');
      console.log(storedUsers)
      // You can redirect to another page or perform other actions after successful login
     // window.location.href="./reservation/index.html"; // Replace with the actual path of your profile
     const url="../profile/index.html"
     window.open(url, '_blank');
    
    } else { 
      alert('Invalid username or password');
    }
  }