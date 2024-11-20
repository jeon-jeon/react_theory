import { changeWon } from "../function/util";

export type PriceProps = { price?: number };

const Price = ({ price = 0 }: PriceProps) => {
  return (
    <span style={{ color: "#363636b3", fontSize: "14px" }}>
      ₩{changeWon(price)}
    </span>
  );
};

export default Price;
