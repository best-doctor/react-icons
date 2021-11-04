import * as React from 'react'

function SvgCheck(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <svg
      width={11}
      height={8}
      viewBox="0 0 11 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        d="M3.833 5.85L9.195.488l.826.825L3.833 7.5.121 3.788l.825-.825L3.833 5.85z"
        fill={props.color || 'currentColor'}
      />
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgCheck)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
