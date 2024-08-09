import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Calendar = (props) => (
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
      d="M18.208 3.833H4.792A1.917 1.917 0 0 0 2.875 5.75v13.417c0 1.058.858 1.916 1.917 1.916h13.416a1.917 1.917 0 0 0 1.917-1.916V5.75a1.917 1.917 0 0 0-1.917-1.917ZM15.333 1.917V5.75M7.667 1.917V5.75M2.875 9.583h17.25"
    />
  </Svg>
)
export default Calendar
