import * as React from 'react'

function SvgPlus(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 10 10"
      width={10}
      height={10}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        fill={props.color || 'currentColor'}
        d="M4.333 4.333v-4h1.334v4h4v1.334h-4v4H4.333v-4h-4V4.334h4z"
      />
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgPlus)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
