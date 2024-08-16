import * as React from "react"
import Svg, { Path } from "react-native-svg"
const BackButton = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M9.742.258a.883.883 0 0 1 .085 1.15l-.085.098L2.13 9.118l7.61 7.611a.883.883 0 0 1 .086 1.149l-.085.099a.883.883 0 0 1-1.15.085l-.098-.085L.258 9.742a.883.883 0 0 1-.085-1.15l.085-.098L8.494.258a.882.882 0 0 1 1.248 0Z"
    />
  </Svg>
)
export default BackButton
