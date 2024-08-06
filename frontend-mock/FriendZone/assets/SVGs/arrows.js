import * as React from "react"
import Svg, { Path } from "react-native-svg"
const ArrowsPic = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m17.583 12.492-4.175 4.183M3.417 12.492h14.166M3.417 7.508l4.175-4.183M17.583 7.508H3.417"
    />
  </Svg>
)
export default ArrowsPic
