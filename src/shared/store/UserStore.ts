import React from "react";
import { action, makeObservable, observable } from "mobx";

type TypeUser = {
  email: string;
};

interface IUser {
  user: TypeUser;
  setUser(email: string): void;
}

export class User implements IUser {
  user = { email: "" };
  constructor() {
    makeObservable(this, {
      user: observable,
      setUser: action,
    });
  }

  setUser(email: string): void {
    this.user.email = email;
  }
}

export const UserStore = new User();
