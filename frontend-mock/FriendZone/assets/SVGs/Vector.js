import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Vector = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={9}
    fill="none"
    {...props}
  >
    <Path
      fill="#747688"
      d="M5.544 3.68 1.859 1.102a1 1 0 0 0-1.573.82v5.158a1 1 0 0 0 1.573.82l3.685-2.58a1 1 0 0 0 0-1.638Z"
      opacity={0.5}
    />
  </Svg>
)
export default Vector
