import * as React from 'react'

function SvgChat(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 15 15"
      width={15}
      height={15}
      ref={svgRef}
      {...props}
    >
      <path
        fill={props.color || 'currentColor'}
        d="M6.25 1.875h2.5a5 5 0 110 10v2.188c-3.125-1.25-7.5-3.126-7.5-7.188a5 5 0 015-5zm1.25 8.75h1.25a3.75 3.75 0 100-7.5h-2.5a3.75 3.75 0 00-3.75 3.75c0 2.256 1.539 3.729 5 5.3v-1.55z"
      />
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgChat)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
