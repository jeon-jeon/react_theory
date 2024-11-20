const Greeting = (props: { isMorning: boolean }) => {
  return (
    <span>{props.isMorning == true ? "좋은 아침입니다~" : "안녕하세요"}</span>
  );
};

export default Greeting;
