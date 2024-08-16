import * as React from "react"
import Svg, { Path } from "react-native-svg"
const WriteIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={11}
    fill="none"
    {...props}
  >
    <Path
      stroke="#56A7FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.938 1.136a1.15 1.15 0 0 1 1.624 1.625l-6.77 6.77-2.167.542.542-2.166 6.77-6.771Z"
    />
  </Svg>
)
export default WriteIcon
