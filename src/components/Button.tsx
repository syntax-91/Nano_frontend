import { Load } from "./Load";

interface props {
  label: string;

  isLoading: boolean;

  onClick: () => void;
  type: "button" | "submit" | "reset";
}

export function Button({
  label = "text",
  isLoading = false,
  onClick,
  type = "button",
}: Partial<props>) {
  console.info("isLoading >> ", isLoading);

  return (
    <>
      <button type={type} onClick={onClick} className="btn r10 bgPrimary cp">
        {isLoading ? <Load /> : label}
      </button>
    </>
  );
}
