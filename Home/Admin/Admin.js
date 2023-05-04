const AdminLogged = JSON.parse(localStorage.getItem('logedAdmin'));
const UserLogged = JSON.parse(localStorage.getItem('logedUser'));
const heading = document.getElementById('AdminHeading');
heading.innerHTML=`Welcome ${AdminLogged[AdminLogged.length-1].AdminFirstName}`
let pageRefreshed = false;
window.addEventListener('storage',(e)=>{
    if(e.key=='logedUser'){
        if (!pageRefreshed) {
            location.reload();
            pageRefreshed = true;
          }
    }
})
const tableBody = document.getElementById('tableBody');

for (var i = 0; i < UserLogged.length; i++) {
    var row = tableBody.insertRow();
        row.insertCell(0).innerHTML = UserLogged[i].UserFirstName;
        row.insertCell(1).innerHTML = UserLogged[i].UserlastName;
        row.insertCell(2).innerHTML = UserLogged[i].username;
        row.insertCell(3).innerHTML = UserLogged[i].UserEmail;
        if (UserLogged[i].isActive) {
            let row4Cell = row.insertCell(4)
            row4Cell.innerHTML = "active";
            row4Cell.classList.add('active')
        }
        else {
            let row4Cell = row.insertCell(4)
            row4Cell.innerHTML = "DeActive";
            row4Cell.classList.add('deactive')
        }
    }
    
