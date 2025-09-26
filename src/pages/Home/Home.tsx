import "./HomePageStyles.scss";
import B1 from "../../widgets/b1/B1";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { userStore } from "../../app/store/userStore";
import { isOpenStore } from "../../app/store/isOpenStore";
import SearchWidget from "../../widgets/search/SearchWidget";

function Home() {
  const n = useNavigate();

  useEffect(() => {
    if (!userStore.isAuth) {
      n("/auth");
    }
  }, []);

  return (
    <div className="HomePage">
      {isOpenStore.isOpenMap.search && <SearchWidget />}
      <B1 />
      <Outlet />
    </div>
  );
}

export default observer(Home);
