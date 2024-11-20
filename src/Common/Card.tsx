type Cardprops = {
  imgSrc: string;
  name: string;
};

const Card = (props: Cardprops) => {
  const boxCss: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  };

  const imgCss: React.CSSProperties = {
    width: "100px",
    height: "100px",
    borderRadius: "9999px",
    objectFit: "cover",
  };

  return (
    <div style={boxCss}>
      <img style={imgCss} src={props.imgSrc} alt="" />
      <span>{props.name}</span>
    </div>
  );
};

export default Card;
