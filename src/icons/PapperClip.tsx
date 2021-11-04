import * as React from 'react'

function SvgPapperClip(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 17 18"
      width={17}
      height={18}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        d="M16.08 8.288L9.188 15.18A4.502 4.502 0 012.82 8.813L9.713 1.92a3.002 3.002 0 114.245 4.245l-6.9 6.893a1.501 1.501 0 01-2.123-2.123l6.368-6.36"
        stroke={props.color || 'currentColor'}
      />
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgPapperClip)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
