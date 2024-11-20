import TextCarStatus, { TextCarStatusProps } from "./TextCarStatus";

const KiaBox = (props: TextCarStatusProps) => {
  const boxCss: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f5fdeb",
    border: "1px solid #f5fdeb",
    borderRadius: "4px",
    gap: "10px",
    padding: "20px 24px",
  };

  return (
    <div style={boxCss}>
      <TextCarStatus
        carName={props.carName}
        carStatus={props.carStatus}
      ></TextCarStatus>
      <h1 style={{ color: "#05141f" }}>123가0987</h1>
    </div>
  );
};

export default KiaBox;
