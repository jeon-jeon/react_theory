import { IconType } from "react-icons";

type BoxType = {
  Icon: IconType;
};
const Box = ({ Icon }: BoxType) => {
  const boxCss: React.CSSProperties = {
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
    width: "fit-content",
    padding: "10px",
  };
  return (
    <div style={boxCss}>
      <Icon />
    </div>
  );
};

export default Box;
