import { isOpenStore } from "../../app/store/isOpenStore";
import { Block } from "../../components/Block";
import { Chats } from "../chat/chats";
import s from "./b1Styles.module.scss";
import { HeaderB1 } from "./headerB1";
import { observer } from "mobx-react-lite";
import { Suspense } from "react";
import { MenuDesktopLazy } from "../../widgets/menu/menuLazy";

function B1() {
  return (
    <Block cls={s.B1}>
      <HeaderB1 />

      {isOpenStore.isOpenMap.menuDesktop == true && (
        <Suspense>
          <MenuDesktopLazy />
        </Suspense>
      )}

      <Chats />
    </Block>
  );
}

export default observer(B1);
