export type TitleProps = {
  message?: string;
};

const Title = ({ message = "문구를 입력해주세요" }: TitleProps) => {
  const msgCss: React.CSSProperties = {
    color: "#05141f",
    fontSize: "20px",
    fontWeight: "bold",
  };
  return <div style={msgCss}>{message}</div>;
};

export default Title;
