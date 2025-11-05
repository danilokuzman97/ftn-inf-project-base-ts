import { UserService } from "./services/user.service";

const userService = new UserService()

function renderData(): void{
  userService.getAll()
    .then(users =>{
      const table = document.querySelector('table tbody');

      if(!table){
        console.error('Table body not found');
        return;
      }

      for(let i = 0; i < users.length; i++){
        //kreiramo novi red
        const newRow = document.createElement('tr');

        //kreiramo celiju za id knjige
        const cell1 = document.createElement('td');
        cell1.textContent = users[i].id.toString();
        newRow.appendChild(cell1);

        //kreiramo celiju za korisnicko ime
        const cell2 = document.createElement('td');
        cell2.textContent = users[i].userName;
        newRow.appendChild(cell2);

        //kreiramo celiju za ime korisnika
        const cell3 = document.createElement('td');
        cell3.textContent = users[i].name;
        newRow.appendChild(cell3)

        //kreiramo celiju za prezime korisnika
        const cell4 = document.createElement('td');
        cell4.textContent = users[i].surname;
        newRow.appendChild(cell4);

        //kreiramo celiju za datum rodjenja
        const cell5 = document.createElement('td');
        const date = new Date(users[i].birthDate);
        const formatDate = date.toLocaleDateString("sr-RS",{
          day: "2-digit",
          month: "2-digit",
          year: "numeric"
        });
        cell5.textContent = formatDate;
        newRow.appendChild(cell5);

        const cell6 = document.createElement('td');
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        const userId = users[i].id;
        editBtn.onclick = function(){
          window.location.href = `./usersForm/userForm.html?id=${userId}`
        }
        cell6.appendChild(editBtn);
        newRow.appendChild(cell6);

        table.appendChild(newRow);
      }
    })
    .catch(error =>{
      console.error(error.message);
    });
}
renderData();