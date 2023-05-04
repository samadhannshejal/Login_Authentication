const UserLogoutBtn=document.getElementById('userLogOutBtn');
let UserLogged= JSON.parse(localStorage.getItem('logedUser'));
const heading=document.getElementById('UserHeading');
let actionfind = UserLogged.find((item) => item.isActive === true);
 heading.innerHTML=`Welcome ${actionfind.UserFirstName}`
UserLogoutBtn.addEventListener('click',(e)=>{
  if (actionfind.isActive) {
    actionfind.isActive = false;
  }
  localStorage.setItem("logedUser", JSON.stringify(UserLogged));
  window.location.href="../../Login/Login.html"
})

