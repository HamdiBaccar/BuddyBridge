import * as React from "react";
import Svg, { Path } from "react-native-svg";
const HeartCircle = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.00016 15.0937C11.6821 15.0937 14.6668 12.1089 14.6668 8.42704C14.6668 4.74514 11.6821 1.76038 8.00016 1.76038C4.31826 1.76038 1.3335 4.74514 1.3335 8.42704C1.3335 12.1089 4.31826 15.0937 8.00016 15.0937Z"
      stroke="#EF4681"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.2199 12.0603C8.0999 12.1003 7.89323 12.1003 7.77323 12.0603C6.73323 11.707 4.3999 10.2203 4.3999 7.70034C4.3999 6.587 5.29324 5.68701 6.3999 5.68701C7.05324 5.68701 7.63323 6.00034 7.9999 6.49367C8.3599 6.00701 8.94656 5.68701 9.59989 5.68701C10.7066 5.68701 11.5999 6.587 11.5999 7.70034C11.5999 10.2203 9.26657 11.707 8.2199 12.0603Z"
      stroke="#EF4681"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default HeartCircle;
