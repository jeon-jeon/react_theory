import Button, { ButtonProps } from "./Button";
import Title, { TitleProps } from "./Title";

export type PopUpBoxProps = TitleProps & ButtonProps;

const PopUpBox = (props: PopUpBoxProps) => {
  const boxCss: React.CSSProperties = {
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    gap: "36px",
  };
  return (
    <div style={boxCss}>
      <Title></Title>
      <Button></Button>
    </div>
  );
};

export default PopUpBox;
