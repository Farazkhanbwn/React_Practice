import "./App.css";
import Bootbtn from "./component/bootstrap_btn";
import CustomButton from "./component/custom-button/custom-button";
import CustomInput from "./component/custom-input/custom-input";
import { useState } from "react";

function App() {
  const [state, setState] = useState("");
  const onChangeCustomInput = (text) => {
    setState(text);
  };

  let logMessage = () =>{ 
    console.log("Welcome to Bootstrap Button");
  }
  return (
    <div>
      {/* <Bootbtn text = "View More" type = "secondary"/> */}
      {/* <CustomInput
        type="text"
        placeholder="test"
        onChange={onChangeCustomInput}
      />
      <p>value from custom input is: {state}</p> */}
      <CustomButton type ="btn-primary" title = "primary" logMessage= {logMessage}/>
    </div>
  );
}

export default App;
