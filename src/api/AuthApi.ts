import { IFormAuth } from 'features/auth/interfaces/interfaces';
import { IAuthApi } from './interfaces/interfaces';



class AuthApi implements IAuthApi {
  async registration(user: IFormAuth) {
    try {
      const response = await fetch('http://localhost:3002/auth/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error();
      }

      const result = await response.json();
      return result;
    } catch (err) {
      console.log(err);
      throw new Error('Что то пошло не так');
    }
  }

  async login(dataLogin: IFormAuth) {
    try {
      const response = await fetch('http://localhost:3002/auth/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(dataLogin),
      });
      if (!response.ok) {
        throw new Error();
      }
     return  await response.json();

    } catch (error) {
      throw new Error();
    }
  }

  async auth() {
    const token = JSON.parse(localStorage.getItem('wallet')!)
    if(!token){
        throw new Error('Вам необходимо войти заново. Приносим свои извенения');
    }
    try {
      const response = await fetch('http://localhost:3002/auth/auth', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        },
      });
      if (!response.ok) {
        throw new Error();
      }

    return await response.json();

    } catch (error) {
      localStorage.removeItem('wallet');
      return new Error();
    }
  }


  async logout(id:string){
    console.log(typeof id);

    try {
      const response = await fetch('http://localhost:3002/auth/out', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({id}),
      });
      if (!response.ok) {
        throw new Error();
      }
        return  await response.json();

    } catch (error) {
      throw new Error();
    }
  }
}



export const authAPI = new AuthApi();
