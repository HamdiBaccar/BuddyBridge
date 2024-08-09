import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Mail = (props) => (
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
      d="M3.833 3.833h15.334c1.054 0 1.916.863 1.916 1.917v11.5a1.922 1.922 0 0 1-1.916 1.917H3.833a1.922 1.922 0 0 1-1.916-1.917V5.75c0-1.054.862-1.917 1.916-1.917Z"
    />
    <Path
      stroke="#767676"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.083 5.75 11.5 12.458 1.917 5.75"
    />
  </Svg>
)
export default Mail
