import propTypes from "prop-types";
import React, { useState } from "react";


function Input() {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        className="w-full p-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-500"
      />
    </div>
  );
}

Input.propTypes = {
  type: propTypes.string,
  placeholder: propTypes.string,
  className: propTypes.string,
};

export default Input;
