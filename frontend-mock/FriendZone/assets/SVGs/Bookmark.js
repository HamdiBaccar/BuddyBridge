import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Bookmark = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <Path fill="#fff" d="M0 0h23v23H0z" />
    <Path
      stroke="#767676"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.208 20.125 11.5 15.333l-6.708 4.792V4.792a1.917 1.917 0 0 1 1.916-1.917h9.584a1.916 1.916 0 0 1 1.916 1.917v15.333Z"
    />
  </Svg>
)
export default Bookmark
