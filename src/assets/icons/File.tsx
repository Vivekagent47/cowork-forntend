import React from "react";

interface IProps {
  width?: string;
  height?: string;
  classSvg?: string;
  style?: any;
}

const File = ({ width, height, style, classSvg }: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    className={classSvg}
    style={{ ...style }}
  >
    <path d="M20.389,4.268l-2.656-2.657c-1.039-1.039-2.42-1.611-3.89-1.611H7.5C4.467,0,2,2.467,2,5.5v13c0,3.033,2.467,5.5,5.5,5.5h9c3.032,0,5.5-2.467,5.5-5.5V8.157c0-1.469-.572-2.85-1.611-3.889Zm-3.889,16.732H7.5c-1.378,0-2.5-1.122-2.5-2.5V5.5c0-1.378,1.122-2.5,2.5-2.5h5.5V7c0,1.105,.895,2,2,2h4v9.5c0,1.378-1.121,2.5-2.5,2.5Zm-.5-6.5v3c-.034,1.972-2.967,1.971-3,0v-3c.034-1.972,2.967-1.971,3,0Zm-5-3v6c-.033,1.972-2.967,1.971-3,0v-6c.033-1.972,2.967-1.971,3,0Z" />
  </svg>
);

export default File;
