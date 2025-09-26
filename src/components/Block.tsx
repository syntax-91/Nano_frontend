interface props {
  cls?: string;
  radius?: number;
  isBlockBg?: boolean;
}
import "./UIStyles.scss";

export function Block({
  children,
  radius = 0,
  cls = "",
  isBlockBg = true,
}: React.PropsWithChildren<props>) {
  return (
    <div
      style={{
        borderRadius: radius,
      }}
      className={`${cls}
      ${isBlockBg ? "block" : ""} ${radius}`}
    >
      {children}
    </div>
  );
}
