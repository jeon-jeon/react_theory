import ButtonKia from "./ButtonKia";
import TextDesc, { DescProps } from "./TextDesc";
import TextMain, { TextMainProps } from "./TextMain";

type WarnProps = TextMainProps & DescProps;

const Warn = (props: WarnProps) => {
  const boxCss: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div style={boxCss}>
      <TextMain maintext={props.maintext}></TextMain>
      <TextDesc descText={props.descText}></TextDesc>
      <ButtonKia></ButtonKia>
    </div>
  );
};

export default Warn;
