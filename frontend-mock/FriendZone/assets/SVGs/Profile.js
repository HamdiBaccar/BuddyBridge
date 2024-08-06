import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Profile = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={32}
    fill="none"
    {...props}
  >
    <Path
      fill="#D9D9D9"
      d="M32.5 16c0 8.837-7.163 16-16 16S.5 24.837.5 16s7.163-16 16-16 16 7.163 16 16Z"
    />
    <Path
      fill="#fff"
      d="M6.408 28.416c.866-4.26 5.055-7.493 10.092-7.493 5.037 0 9.227 3.232 10.092 7.493A15.934 15.934 0 0 1 16.5 32c-3.826 0-7.34-1.343-10.092-3.584ZM21.423 13.846a5.026 5.026 0 1 1-10.051 0 5.026 5.026 0 0 1 10.051 0Z"
    />
  </Svg>
)
export default Profile
