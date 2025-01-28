import React from "react";

function Button(props) {
  return (
    <button className="p-2 bg-black-500 text-white rounded-lg" {...props}>
      {props.children}
    </button>
  );
}

export default Button;