import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Sidebar = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={20}
    fill="none"
    {...props}
  >
    <Path
      fill="#1C3F83"
      fillRule="evenodd"
      d="M0 1.25C0 .56.56 0 1.25 0h22.5a1.25 1.25 0 1 1 0 2.5H1.25C.56 2.5 0 1.94 0 1.25ZM0 10c0-.69.56-1.25 1.25-1.25H17.5a1.25 1.25 0 1 1 0 2.5H1.25C.56 11.25 0 10.69 0 10Zm1.25 7.5a1.25 1.25 0 1 0 0 2.5h22.5a1.25 1.25 0 0 0 0-2.5H1.25Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Sidebar
