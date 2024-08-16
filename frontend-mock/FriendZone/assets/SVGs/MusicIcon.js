import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const MusicIcon = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={18}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#FC819E"
        d="M6.467 3.568v8.853a3.16 3.16 0 0 0-2.132-.826 3.175 3.175 0 0 0-3.172 3.172 3.175 3.175 0 0 0 3.172 3.172 3.175 3.175 0 0 0 3.172-3.165V8.448l9.109-2.738v4.577a3.16 3.16 0 0 0-2.133-.825 3.176 3.176 0 0 0-3.171 3.171 3.175 3.175 0 0 0 3.171 3.172 3.175 3.175 0 0 0 3.172-3.154V.206L6.467 3.568Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.54.24h17.733v17.733H.54z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default MusicIcon
