import * as React from "react"
import Svg, { Rect } from "react-native-svg"
const Search = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={180}
    height={32}
    fill="none"
    {...props}
  >
    <Rect
      width={179}
      height={31}
      x={0.5}
      y={0.5}
      fill="#fff"
      stroke="#1C3F83"
      rx={15.5}
    />
  </Svg>
)
export default Search
