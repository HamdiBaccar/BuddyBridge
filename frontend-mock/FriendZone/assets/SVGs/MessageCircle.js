import * as React from "react"
import Svg, { Path } from "react-native-svg"
const MessageCircle = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={17}
    fill="none"
    {...props}
  >
    <Path
      stroke="#767676"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.462 8.082a7 7 0 0 1-.752 3.175 7.101 7.101 0 0 1-6.35 3.927 7 7 0 0 1-3.175-.752l-4.762 1.587 1.587-4.762a7.001 7.001 0 0 1-.751-3.175 7.102 7.102 0 0 1 3.926-6.35A7.001 7.001 0 0 1 9.36.982h.418a7.085 7.085 0 0 1 6.684 6.684v.417Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default MessageCircle
