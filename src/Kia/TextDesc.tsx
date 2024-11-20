export type DescProps = { descText: string };
const TextDesc = (props: DescProps) => {
  return (
    <p style={{ color: "#697279", textAlign: "center" }}>{props.descText}</p>
  );
};

export default TextDesc;
