import * as React from 'react'

function SvgCalendar(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        d="M17 4h4a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h4V2h2v2h6V2h2v2zm-2 2H9v2H7V6H4v4h16V6h-3v2h-2V6zm5 6H4v8h16v-8z"
        fill={props.color || 'currentColor'}
      />
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgCalendar)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
