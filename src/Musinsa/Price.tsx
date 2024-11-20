import { changeWon } from "../function/util";

export type PriceProps = { price: number };

const Price = (props: PriceProps) => {
  const priceCss: React.CSSProperties = {
    fontWeight: 600,
  };

  const { price } = props;

  return <span style={priceCss}>{changeWon(price)}원</span>;
};

export default Price;
