type Nameprops = { name: string };

const Musinsa = (props: Nameprops) => {
  const css: React.CSSProperties = {
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: 700,
    backgroundColor: "white",
    margin: "5px",
    border: "1px solid grey",
    borderRadius: "4px",
  };

  return <button style={css}>{props.name}</button>;
};
export default Musinsa;
