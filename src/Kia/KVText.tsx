const KVText = (props: { title: string; content: string }) => {
  const css: React.CSSProperties = {
    width: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
  };
  const titleCss: React.CSSProperties = {
    color: "#697279",
    fontSize: "14px",
    fontWeight: 600,
  };
  const contentCss: React.CSSProperties = {
    fontSize: "14px",
    fontWeight: 600,
  };

  return (
    <div style={css}>
      <span style={titleCss}>{props.title}</span>
      <span style={contentCss}>{props.content}</span>
    </div>
  );
};

export default KVText;
