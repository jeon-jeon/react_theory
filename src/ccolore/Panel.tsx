import Color, { ColorProps } from "./Color";
import Name, { NameProps } from "./Name";
import Price, { PriceProps } from "./Price";

type PanelProps = NameProps & PriceProps & { colors: ColorProps[] };

const Panel = (props: PanelProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
      <Name {...props} />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Price {...props} />
        <div style={{ display: "flex", gap: "3px" }}>
          {props.colors.map((v) => (
            <Color backgroundColor={v.backgroundColor}></Color>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Panel;
