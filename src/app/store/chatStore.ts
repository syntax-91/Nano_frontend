import { makeAutoObservable } from "mobx";

interface ICurrentChatData {
  displayName: string;
  ava: string;
  status: "online" | "offline";
}

class ChatStore {
  currentChatData: ICurrentChatData = {
    displayName: "",
    ava: "",
    status: "offline",
  };

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentChatData(data: ICurrentChatData) {
    this.currentChatData = data;
  }
}

export const chatStore = new ChatStore();
