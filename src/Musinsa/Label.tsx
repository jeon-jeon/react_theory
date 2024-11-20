import Price, { PriceProps } from "./Price";
import Discount, { DiscountProps } from "./Discount";

type LabelProps = PriceProps & DiscountProps;
const Label = (props: LabelProps) => {
  const labelCss: React.CSSProperties = {
    display: "flex",
    gap: "5px",
  };

  return (
    <div style={labelCss}>
      {/* {!!props.percentage && ( */}
      <Discount {...props}></Discount>
      {/* )} */}
      <Price {...props}></Price>
    </div>
  );
};

export default Label;
