type MainColor = "#2a59fe" | "#557afe";
type SubColor = "grey" | "white";
type ButtonProps = {
  bgColor: MainColor | SubColor;
  name: string;
  color: string;
};

const Button = (props: ButtonProps) => {
  const css: React.CSSProperties = {
    backgroundColor: props.bgColor,
    padding: "8px 16px",
    border: `1px solid ${props.bgColor}`,
    borderRadius: "4px",
    color: props.color,
    fontWeight: 700,
  };
  return <button style={css}>{props.name}</button>;
};
export default Button;
