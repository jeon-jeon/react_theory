export type TextCarStatusProps = {
  carName: string;
  carStatus: "대기" | "미완료";
};

const TextCarStatus = (props: TextCarStatusProps) => {
  const textCss: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
  };
  return (
    <div style={textCss}>
      <span style={{ color: "#05141f" }}>{props.carName}</span>
      <span style={{ color: "#5d7d2b" }}>{props.carStatus}</span>
    </div>
  );
};

export default TextCarStatus;
