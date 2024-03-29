import React from "react";

interface IProps {
  width?: string;
  height?: string;
  classSvg?: string;
  style?: any;
}

const Event = ({ width, height, style, classSvg }: IProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    className={classSvg}
    style={{ ...style }}
  >
    <path d="M15.5,0h-.688a1.5,1.5,0,0,0-1.5,1.5,1.313,1.313,0,1,1-2.625,0A1.5,1.5,0,0,0,9.187,0H8.5A5.506,5.506,0,0,0,3,5.5v15A3.5,3.5,0,0,0,6.5,24H9.187a1.5,1.5,0,0,0,1.5-1.5,1.313,1.313,0,1,1,2.625,0,1.5,1.5,0,0,0,1.5,1.5H17.5A3.5,3.5,0,0,0,21,20.5V5.5A5.506,5.506,0,0,0,15.5,0Zm2,21H16.05a4.3,4.3,0,0,0-8.1,0H6.5a.5.5,0,0,1-.5-.5V16h.5A1.5,1.5,0,0,0,8,14.5H8A1.5,1.5,0,0,0,6.5,13H6V5.5A2.5,2.5,0,0,1,7.971,3.057a4.3,4.3,0,0,0,8.058,0A2.5,2.5,0,0,1,18,5.5V13h-.5A1.5,1.5,0,0,0,16,14.5h0A1.5,1.5,0,0,0,17.5,16H18v4.5A.5.5,0,0,1,17.5,21Z" />
    <rect x="10" y="13" width="4" height="3" rx="1.5" />
  </svg>
);

export default Event;
