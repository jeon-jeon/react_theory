export type ColorProps = { backgroundColor?: string };

const Color = ({ backgroundColor = "black" }: ColorProps) => {
  return (
    <div
      style={{
        width: "12px",
        height: "12px",
        backgroundColor: backgroundColor,
      }}
    ></div>
  );
};

export default Color;
