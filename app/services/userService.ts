import{User} from "../models/user"

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
}