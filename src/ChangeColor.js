import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "./features/theme";

function ChangeColor() {
  const [color, setColor] = useState("red");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onChange={() => dispatch(changeColor(color))}>
        Change Color
      </button>
    </div>
  );
}

export default ChangeColor;
