import { observer } from "mobx-react-lite";
import { Block } from "../../components/Block";
import { Msg } from "../msg";
import s from "../chat/chatWidgetsStyles.module.scss";

const fakeMsgs = [
  {
    text: "ку",
    isMsgMe: false,
  },
  {
    text: "сап",
    isMsgMe: true,
  },
  {
    text: "го поидем гулять?",
    isMsgMe: false,
  },
  {
    text: "?",
    isMsgMe: false,
  },
  {
    text: "го",
    isMsgMe: true,
  },
  {
    text: "хорошо уже  иду",
    isMsgMe: false,
  },
];

function Msgs() {
  return (
    <Block cls={s.msgs} radius={20}>
      {fakeMsgs.map((_, idx) => (
        <div key={idx}>
          <Msg text={_.text} isMsgMe={_.isMsgMe} />
        </div>
      ))}
    </Block>
  );
}

export default observer(Msgs);
