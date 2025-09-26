import { makeAutoObservable } from "mobx";

class UserStore {
  isAuth = localStorage.getItem("isAuth") || false;

  constructor() {
    makeAutoObservable(this);
  }
}

export const userStore = new UserStore();
