import * as React from 'react'

function SvgSearch(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 14 14"
      width={14}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        d="M11.02 10.078l2.855 2.855-.944.943-2.854-2.855A6.002 6.002 0 01.332 6.334c0-3.312 2.688-6 6-6a6.002 6.002 0 014.687 9.744zm-1.338-.494a4.665 4.665 0 00-3.35-7.917 4.665 4.665 0 00-4.667 4.667 4.665 4.665 0 007.917 3.35l.1-.1z"
        fill={props.color || 'currentColor'}
      />
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgSearch)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
