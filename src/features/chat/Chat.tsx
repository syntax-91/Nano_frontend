import { useNavigate } from "react-router-dom";
import s from "./chatFeatStyles.module.scss";
import { chatStore } from "../../app/store/chatStore";
import clsx from "clsx";

interface props {
  displayName: string;
  lastMsg: string;
  ava: string;
  status: "online" | "offline";
  roomID: string;
}

export function Chat({ ...props }: props) {
  const n = useNavigate();

  const handleClick = () => {
    chatStore.setCurrentChatData({
      displayName: props.displayName,
      ava: props.ava,
      status: props.status,
    });
    n(`chat/:${props.roomID}`);
  };

  return (
    <div
      onClick={handleClick}
      className={clsx(
        `el cp ${s.chat}`,
        chatStore.currentChatData.displayName === props.displayName &&
          "bgPrimary"
      )}
    >
      <img className={s.ava} src={props.ava} alt="E" />

      <div className={s.data}>
        <p className={s.displayName}>{props.displayName}</p>
        <p className={s.lastMsg}>{props.lastMsg}</p>
      </div>
    </div>
  );
}
