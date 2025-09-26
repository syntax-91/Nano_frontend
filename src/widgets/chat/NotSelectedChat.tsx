import { Block } from "../../components/Block";

export function NotSelectedChat() {
  return (
    <div className="notSelectedChat">
      <Block radius={15} cls="text">
        для начала общение нажмите на чат
      </Block>
    </div>
  );
}
