import React from "react";
import "./custom-button.css";

let CustomButton = (props) => {
  const { type, title, onClick, afterIcon, beforeIcon } = props;

  const onClickButton = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button className={`btn btn-${type}`} onClick={onClickButton}>
      {beforeIcon}
      {title}
      {afterIcon}
    </button>
  );
};

export default CustomButton;
