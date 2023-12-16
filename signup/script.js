
async function submitData(event){
    event.preventDefault();
   
    const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('number').value
      const password = document.getElementById('password').value;
      
      console.log(name)
      const  profileData={
        name:name,
        email:email,
        phone:phone,
        password:password,
        
      }
     
     
      await localStorage.setItem('loginData', JSON.stringify(profileData));
      const url="../login/index.html"
      window.open(url, '_blank');
}