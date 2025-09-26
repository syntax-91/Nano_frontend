interface props {
  w?: number;
  h?: number;
}

export function Space({ w = 0, h = 0 }: props) {
  return (
    <div
      style={{
        width: w,
        height: h,
      }}
    ></div>
  );
}
