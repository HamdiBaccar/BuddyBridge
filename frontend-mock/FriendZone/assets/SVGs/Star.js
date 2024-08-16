import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Star = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={33}
    fill="none"
    {...props}
  >
    <Path
      fill="#FED33D"
      stroke="#26103D"
      strokeWidth={2}
      d="M11.207 21.031c2.304 2.307 3.625 5.478 4.785 10.034 1.16-4.557 2.486-7.728 4.794-10.034 2.307-2.307 5.479-3.631 10.037-4.791-4.558-1.16-7.73-2.484-10.037-4.79-2.308-2.307-3.633-5.478-4.794-10.035-1.16 4.556-2.481 7.727-4.785 10.034-2.304 2.306-5.472 3.631-10.03 4.791 4.558 1.16 7.726 2.485 10.03 4.791Z"
    />
  </Svg>
)
export default Star
