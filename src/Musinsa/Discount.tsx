export type DiscountProps = {
  percentage: number;
};
const Discount = (props: DiscountProps) => {
  const dcCss: React.CSSProperties = {
    color: "red",
    fontWeight: 600,
  };

  const { percentage } = props;

  return <span style={dcCss}>{percentage}%</span>;
};

export default Discount;
