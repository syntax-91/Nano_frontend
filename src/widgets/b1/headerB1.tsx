import { isOpenStore } from "../../app/store/isOpenStore";
import s from "./b1Styles.module.scss";
import { TbMenu3 } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";

export function HeaderB1() {
  const handleMenuDesktop = () => {
    if (isOpenStore.isOpenMap.menuDesktop == true) {
      isOpenStore.setIsOpen("menuDesktop", false);
    } else {
      isOpenStore.setIsOpen("menuDesktop", true);
    }
  };

  const handleSearch = () => {
    isOpenStore.setIsOpen("search", true);
  };

  return (
    <div className={`${s.headerB1} p10`}>
      <TbMenu3 onClick={handleMenuDesktop} size={30} className="el" />
      <p className="cp">Nano</p>
      <AiOutlineSearch onClick={handleSearch} size={30} className="el" />
    </div>
  );
}
