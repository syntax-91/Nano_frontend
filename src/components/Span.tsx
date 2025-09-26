interface props {
  text: string;
  type: "default" | "danger" | "link";
  pl: number;
}

export function Span({
  pl = 15,
  text = "text",
  type = "default",
}: Partial<props>) {
  return (
    <>
      <span
        style={{
          paddingLeft: pl,
        }}
        className={`${type}Color`}
      >
        {text}
      </span>
    </>
  );
}
