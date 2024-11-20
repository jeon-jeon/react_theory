import { colorObj } from "../style/color";

type KIAButtonProps = { bgColor: BackgroundColorType; text: string };
type BackgroundColorType = "grey90" | "grey80" | "grey70";

const KIAButton = (props: KIAButtonProps) => {
  const css: React.CSSProperties = {
    backgroundColor: colorObj[props.bgColor],
    width: "300px",
    padding: "10px",
    border: "none",
    borderRadius: "4px",
    color: "white",
  };

  return <button style={css}>{props.text}</button>;
};

export default KIAButton;
