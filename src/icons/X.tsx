import * as React from 'react'

function SvgX(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      ref={svgRef}
      {...props}
    >
      <path
        d="M7 5.586l4.95-4.95 1.414 1.414L8.414 7l4.95 4.95-1.414 1.414L7 8.414l-4.95 4.95L.636 11.95 5.586 7 .636 2.05 2.05.636 7 5.586z"
        fill={props.color || 'currentColor'}
      />
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgX)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
