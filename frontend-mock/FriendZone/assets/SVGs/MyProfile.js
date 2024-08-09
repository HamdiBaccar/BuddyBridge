import * as React from "react"
import Svg, { Path } from "react-native-svg"
const MyProfile = (props) => (
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
      d="M19.167 20.125v-1.917a3.833 3.833 0 0 0-3.834-3.833H7.667a3.833 3.833 0 0 0-3.834 3.833v1.917M11.5 10.542a3.833 3.833 0 1 0 0-7.667 3.833 3.833 0 0 0 0 7.667Z"
    />
  </Svg>
)
export default MyProfile
