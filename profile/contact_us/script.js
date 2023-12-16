
async function submitData(event){
    event.preventDefault();
    alert("hello")
    const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('number').value
      const address = document.getElementById('address').value;
      const feedback = document.getElementById('feedback').value
      console.log(name)
      const  profileData={
        name:name,
        email:email,
        phone:phone,
        address:address,
        feedback:feedback
      }
      console.log(profileData)
     
      await localStorage.setItem('profile', JSON.stringify(profileData));
      const url="http://127.0.0.1:5500/index.html"
      window.open(url, '_blank');
}