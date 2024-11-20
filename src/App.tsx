import Panel from "./ccolore/Panel";
import { FaCartArrowDown } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Label from "./Musinsa/Label";
import PopUpBox from "./popup/PopUpBox";
import Box from "./Box";
import TestButton from "./TestButton";
import LikeButton from "./LikeButton";

function App() {
  return (
    <div className="App">
      <LikeButton></LikeButton>
      {/* <Label percentage={10} price={49500}></Label> */}
      {/* <PopUpBox></PopUpBox> */}
      {/* <Panel
        name="썸머라이트 500"
        price={219000}
        colors={[
          { backgroundColor: "blue" },
          { backgroundColor: "skyblue" },
          { backgroundColor: "pink" },
        ]}
      ></Panel>

      <Box Icon={FaCartArrowDown}></Box>
      <Box Icon={FaApple}></Box> */}
    </div>
  );
}

export default App;
