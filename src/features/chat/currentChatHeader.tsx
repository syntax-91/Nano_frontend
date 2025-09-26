import { observer } from "mobx-react-lite";
import { chatStore } from "../../app/store/chatStore";
import { Block } from "../../components/Block";
import s from "./chatFeatStyles.module.scss";

function CurrentChatHeader() {
  return (
    <Block radius={30} cls={`${s.currentChatHeader}`}>
      <img className={s.ava} src={chatStore.currentChatData.ava} alt="ERR" />

      <div className={s.data}>
        <p className={s.displayName}>{chatStore.currentChatData.displayName}</p>
        <p className={s.status}>{chatStore.currentChatData.status}</p>
      </div>
    </Block>
  );
}

export default observer(CurrentChatHeader);
