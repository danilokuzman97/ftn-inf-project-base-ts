import{User} from "../models/user"
import { userForm } from "../models/userFormat";

export class UserService{
  private apiUrl: string;

  constructor(){
    this.apiUrl = 'http://localhost:5249/api/users';
  }

  getAll(): Promise<User[]>{
    return fetch(this.apiUrl)
      .then(response =>{
        if(!response.ok){
          return response.text().then(errorMessage =>{
            throw{status: response.status, message: errorMessage}
          })
        }
        return response.json()
      })
      .then((users: User[]) =>{
        return users;
      })
      .catch(error =>{
        console.error(error.status)
        throw error
      });
  }




  add(formData: userForm): Promise<User>{
    return fetch(this.apiUrl,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if(!response.ok){
        return response.text().then(errorMessage =>{
          throw{status: response.status, message: errorMessage}
        })
      }
      return response.json()
    })
    .then((user: User) =>{
      return user
    })
    .catch(error =>{
      console.error(error.status)
      throw error
    })
  }
}