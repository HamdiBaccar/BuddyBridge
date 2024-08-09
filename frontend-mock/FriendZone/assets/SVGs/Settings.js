import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Settings = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={23}
    height={23}
    fill="none"
    {...props}
  >
    <Path
      fill="#1C8FF8"
      fillOpacity={0.338}
      fillRule="evenodd"
      d="M0 0v23h23V0H0Z"
      clipRule="evenodd"
      opacity={0.01}
    />
    <Path
      stroke="#767676"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.26 14.418a2.679 2.679 0 1 0 0-5.357 2.679 2.679 0 0 0 0 5.357Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#767676"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.869 14.418a1.474 1.474 0 0 0 .294 1.626l.054.053a1.786 1.786 0 1 1-2.527 2.527l-.054-.053a1.474 1.474 0 0 0-1.625-.295c-.54.232-.89.761-.893 1.349v.151a1.786 1.786 0 0 1-3.572 0v-.08a1.473 1.473 0 0 0-.965-1.348 1.473 1.473 0 0 0-1.625.294l-.053.054a1.786 1.786 0 1 1-2.528-2.527l.054-.054c.421-.43.538-1.074.295-1.625a1.473 1.473 0 0 0-1.349-.893h-.152a1.786 1.786 0 1 1 0-3.572h.08a1.474 1.474 0 0 0 1.35-.964 1.473 1.473 0 0 0-.295-1.626l-.054-.053a1.786 1.786 0 1 1 2.527-2.527l.054.053c.43.421 1.074.538 1.625.295h.071c.54-.232.891-.761.893-1.349v-.151a1.786 1.786 0 1 1 3.572 0v.08c.003.587.354 1.117.893 1.348a1.473 1.473 0 0 0 1.626-.294l.053-.054a1.786 1.786 0 1 1 2.527 2.527l-.053.054a1.473 1.473 0 0 0-.295 1.625v.072c.232.54.761.89 1.348.893h.152a1.786 1.786 0 1 1 0 3.571h-.08a1.473 1.473 0 0 0-1.348.893Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Settings
