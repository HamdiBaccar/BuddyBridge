import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Localisation = (props) => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M14.5 7.09363C14.5 10.5086 11.2869 13.5666 9.56335 14.9614C8.9357 15.4692 8.0643 15.4692 7.43665 14.9614C5.71308 13.5666 2.5 10.5086 2.5 7.09363C2.5 5.50233 3.13214 3.97621 4.25736 2.85099C5.38258 1.72577 6.9087 1.09363 8.5 1.09363C10.0913 1.09363 11.6174 1.72577 12.7426 2.85099C13.8679 3.97621 14.5 5.50233 14.5 7.09363Z"
      fill="#56A7FF"
    />
    <Path
      d="M8.5 9.09363C9.60457 9.09363 10.5 8.1982 10.5 7.09363C10.5 5.98906 9.60457 5.09363 8.5 5.09363C7.39543 5.09363 6.5 5.98906 6.5 7.09363C6.5 8.1982 7.39543 9.09363 8.5 9.09363Z"
      fill="white"
    />
  </Svg>
);
export default Localisation;
