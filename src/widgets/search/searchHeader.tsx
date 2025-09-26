import { Block } from "../../components/Block";
import { Input } from "../../components/Input";
import type { SetStateAction } from "react";
import { isOpenStore } from "../../app/store/isOpenStore";
import { IoCloseOutline } from "react-icons/io5";

interface props {
  query: string;
  setQuery: (e: SetStateAction<string>) => void;
}

export function SearchHeader(props: props) {
  const handleClose = () => {
    isOpenStore.setIsOpen("search", false);
  };

  return (
    <Block cls="searchHeader">
      <Input
        visualType="search"
        display="inline"
        placeholder="Enter search"
        value={props.query}
        onChange={(e) => props.setQuery(e)}
      />
      <IoCloseOutline
        className="el"
        color="#7a7878"
        onClick={handleClose}
        size={35}
      />
    </Block>
  );
}
