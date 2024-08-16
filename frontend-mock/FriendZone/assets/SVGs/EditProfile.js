import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const EditProfile = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={23}
    fill="none"
    {...props}
  >
    <G
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#a)"
    >
      <Path d="M10.083 3.907H3.667A1.833 1.833 0 0 0 1.833 5.74v12.833a1.833 1.833 0 0 0 1.834 1.834H16.5a1.833 1.833 0 0 0 1.833-1.834v-6.416" />
      <Path d="M16.958 2.532a1.945 1.945 0 0 1 2.75 2.75L11 13.99l-3.667.917.917-3.667 8.708-8.708Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 .24h22v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default EditProfile
