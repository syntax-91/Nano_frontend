import clsx from "clsx";
import "./UIStyles.scss";
import { type SetStateAction } from "react";
import { CgDanger } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";

interface props {
  placeholder?: string;
  value?: string;
  onChange?: (e: SetStateAction<string>) => void;

  type?: "text" | "email";
  visualType?: "default" | "search" | "danger";

  isChIcon?: boolean;

  display: "block" | "inline";

  onClick?: () => void;
}

/*
  если visualType не равен к default
  то тогда применяется класс inpPX37 (
  input padding X(x ось) 37)

  если visaulType не будет дефолт то там будет
  иконка, чтобы не было наложений иконки с текстом
  мы добавляем отступы, 

  -- если произашла ошибка например у visualType 
  нету иконки то можете убрать это через 'isChIcon=false'

  isChIcon - is children icon
*/

export function Input({
  value,
  placeholder = "text...",

  display = "block",

  onChange,
  type = "text",
  visualType = "default",
  isChIcon = visualType !== "default" || false,
}: props) {
  return (
    <div className={clsx("inputC")}>
      <div className="icon">
        {visualType == "search" ? <CiSearch size={27} /> : ""}

        {visualType == "danger" ? <CgDanger size={27} /> : ""}
      </div>

      <input
        style={{
          display: display,
        }}
        placeholder={placeholder}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : () => {}}
        className={`input r10 eb tr3 input_${visualType}
        ${isChIcon && "inpPX37"}`}
        type={type}
      />
    </div>
  );
}
