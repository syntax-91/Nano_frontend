import { makeAutoObservable } from "mobx";

class IsOpenStore {
  isOpenMap = {
    search: false,
    menuDesktop: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setIsOpen(t: keyof typeof this.isOpenMap, v: boolean) {
    this.isOpenMap[t] = v;
  }
}

export const isOpenStore = new IsOpenStore();
