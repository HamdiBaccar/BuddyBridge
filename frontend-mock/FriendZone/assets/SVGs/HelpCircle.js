import * as React from "react"
import Svg, { Path } from "react-native-svg"
const HelpCircle = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <Path
      stroke="#767676"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.5 21.083a9.583 9.583 0 1 0 0-19.167 9.583 9.583 0 0 0 0 19.167Z"
    />
    <Path
      stroke="#767676"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.711 8.625a2.875 2.875 0 0 1 5.587.958c0 1.917-2.875 2.875-2.875 2.875v1.632M11.5 16.292h.01"
    />
  </Svg>
)
export default HelpCircle
