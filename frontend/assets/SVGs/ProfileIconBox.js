import * as React from "react"
import Svg, { Path } from "react-native-svg"

const ProfileIB = (props) => (
  <Svg
    width={16}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.502 5.36c0 1.989-1.567 3.6-3.5 3.6C6.068 8.96 4.5 7.35 4.5 5.36c0-1.988 1.567-3.6 3.5-3.6 1.934 0 3.501 1.612 3.501 3.6Zm-.496 5.63c1.114.225 1.84.592 2.152 1.186a1.642 1.642 0 0 1 0 1.476c-.312.594-1.01.985-2.163 1.187a11.19 11.19 0 0 1-1.557.201c-.485.054-.97.054-1.46.054h-.882a4.212 4.212 0 0 0-.536-.036 10.673 10.673 0 0 1-1.558-.196c-1.113-.213-1.84-.593-2.15-1.186a1.626 1.626 0 0 1-.185-.747 1.607 1.607 0 0 1 .178-.753c.306-.594 1.033-.98 2.157-1.187a11.374 11.374 0 0 1 1.563-.195c.96-.078 1.924-.078 2.884 0 .523.03 1.043.095 1.557.195Z"
      fill="#000"
    />
  </Svg>
)

export default ProfileIB

