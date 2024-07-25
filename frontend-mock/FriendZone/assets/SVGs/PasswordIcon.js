import * as React from "react"
import Svg, { Path, Mask } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="none"
    {...props}
  >
    <Path
      stroke="#4D4D4D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M5.488 10.33V8.158c0-3.593 1.085-6.512 6.512-6.512s6.512 2.92 6.512 6.512v2.17"
    />
    <Path
      stroke="#4D4D4D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M17.427 23.353H6.573c-4.341 0-5.427-1.085-5.427-5.426v-2.171c0-4.341 1.086-5.427 5.427-5.427h10.854c4.34 0 5.426 1.086 5.426 5.427v2.17c0 4.342-1.085 5.427-5.426 5.427Z"
    />
    <Mask id="a" fill="#fff">
      <Path fillRule="evenodd" d="M16.338 16.841h.01-.01Z" clipRule="evenodd" />
    </Mask>
    <Path
      fill="#4D4D4D"
      d="M16.338 15.841a1 1 0 1 0 0 2v-2Zm.01 2a1 1 0 0 0 0-2v2Zm-.01 0h.01v-2h-.01v2Z"
      mask="url(#a)"
    />
    <Mask id="b" fill="#fff">
      <Path fillRule="evenodd" d="M11.995 16.841h.01-.01Z" clipRule="evenodd" />
    </Mask>
    <Path
      fill="#4D4D4D"
      d="M11.995 15.841a1 1 0 1 0 0 2v-2Zm.01 2a1 1 0 1 0 0-2v2Zm-.01 0h.01v-2h-.01v2Z"
      mask="url(#b)"
    />
    <Mask id="c" fill="#fff">
      <Path fillRule="evenodd" d="M7.653 16.841h.01-.01Z" clipRule="evenodd" />
    </Mask>
    <Path
      fill="#4D4D4D"
      d="M7.653 15.841a1 1 0 1 0 0 2v-2Zm.01 2a1 1 0 1 0 0-2v2Zm-.01 0h.01v-2h-.01v2Z"
      mask="url(#c)"
    />
  </Svg>
)
export default SvgComponent
