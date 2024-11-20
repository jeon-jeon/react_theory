export type TextMainProps = {
  maintext: string;
};
const TextMain = (props: TextMainProps) => {
  const mainCss: React.CSSProperties = {
    color: "#05141f",
    fontWeight: "bold",
    fontSize: "40px",
  };
  return <div style={mainCss}>{props.maintext}</div>;
};

export default TextMain;
