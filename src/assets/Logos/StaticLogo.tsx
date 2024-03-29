import React from "react";

interface IProps {
  width: string;
  height: string;
}

const StaticLogo = ({ width, height }: IProps) => (
  <svg
    width={`${width || "79"}`}
    height={`${height || "35"}`}
    viewBox="0 0 79 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M54.8696 0C48.8665 0 44 4.86647 44 10.8696V34.0929H67.5507C73.5538 34.0929 78.4203 29.2264 78.4203 23.2233V0H54.8696ZM59.3986 10.3785C56.397 10.3785 53.9638 12.8117 53.9638 15.8133V23.5507H62.1159C65.1175 23.5507 67.5507 21.1175 67.5507 18.1159V10.3785H59.3986Z"
      fill="#4048EF"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.3913 0C5.3882 0 0.521729 4.86647 0.521729 10.8696V34.0929H24.0725C30.0755 34.0929 34.942 29.2264 34.942 23.2233V0H11.3913ZM15.9203 10.3785C12.9187 10.3785 10.4855 12.8117 10.4855 15.8133V23.5507H18.6377C21.6392 23.5507 24.0725 21.1175 24.0725 18.1159V10.3785H15.9203Z"
      fill="#4048EF"
    />
  </svg>
);

export default StaticLogo;
