import s from "./chat/chatWidgetsStyles.module.scss";

interface props {
  text: string;
  isMsgMe: boolean;
}

export function Msg(props: props) {
  return (
    <div className={`${props.isMsgMe && s.msgMe} ${s.msg}`}>
      <p>{props.text}</p>
    </div>
  );
}
