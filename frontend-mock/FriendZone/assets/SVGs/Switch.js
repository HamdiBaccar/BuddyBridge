import * as React from "react"
import Svg, { Circle } from "react-native-svg"
const Switch = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={32}
    fill="none"
    {...props}
  >
    <Circle cx={16.5} cy={16} r={15.5} fill="#fff" stroke="#1C3F83" />
  </Svg>
)
export default Switch
