export type ButtonProps = {
  contents?: string;
};
const Button = ({ contents = "확인" }: ButtonProps) => {
  const btnCss: React.CSSProperties = {
    padding: "10px 0px",
    backgroundColor: "black",
    border: "none",
    borderRadius: "4px",
    width: "100px",
    color: "white",
  };
  return <button style={btnCss}>{contents}</button>;
};

export default Button;
