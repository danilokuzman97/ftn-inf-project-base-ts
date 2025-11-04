import { userForm } from "../models/userFormat";
import { UserService } from "../services/user.service";

const userService = new UserService

function initializeForm(): void{
  const button = document.querySelector('#submit')
  if(button){
    button.addEventListener("click", submit)
  }
}

function submit(){
    const userName = (document.querySelector('#userName') as HTMLInputElement).value
    const name = (document.querySelector('#name') as HTMLInputElement).value
    const surname = (document.querySelector('#surname') as HTMLInputElement).value
    const date = (document.querySelector('#birthDate') as HTMLInputElement).value
    const birthDate = new Date(date)

    if(!userName || !name || !surname || !date){
      alert("All fields are required.");
      return
    }

    const formData: userForm = {userName, name, surname, birthDate}

    userService.add(formData)
      .then(()=>{
        window.location.href ='../index.html'
      }).catch(error =>{
        console.error(error.status, error.text);
      })
}

document.addEventListener("DOMContentLoaded", initializeForm)