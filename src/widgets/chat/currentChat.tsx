import { observer } from "mobx-react-lite";
import CurrentChatHeader from "../../features/chat/currentChatHeader";
import Msgs from "./msgs";
import s from "./chatWidgetsStyles.module.scss";
import { Space } from "../../components/Space";

function CurrentChat() {
  return (
    <div className={s.currentChat}>
      <CurrentChatHeader />
      <Space h={10} />
      <Msgs />
    </div>
  );
}

export default observer(CurrentChat);
