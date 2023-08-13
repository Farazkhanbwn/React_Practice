import "./App.css";
import Bootbtn from "./component/bootstrap_btn";
import CustomInput from "./component/custom-input/custom-input";
import { useState } from "react";

function App() {
  const [state, setState] = useState("");
  const onChangeCustomInput = (text) => {
    setState(text);
  };

  return (
    <div>
      {/* <Bootbtn text = "View More" type = "secondary"/> */}
      <CustomInput
        type="text"
        placeholder="test"
        onChange={onChangeCustomInput}
      />
      <p>value from custom input is: {state}</p>
    </div>
  );
}

export default App;
