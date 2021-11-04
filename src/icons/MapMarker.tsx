import * as React from 'react'

function SvgMapMarker(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
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
        d="M19.15 9.161c0 1.28-.443 2.743-1.167 4.26-.72 1.507-1.687 3.007-2.669 4.347A45.435 45.435 0 0112 21.77a45.435 45.435 0 01-3.314-4.002c-.982-1.34-1.95-2.84-2.669-4.347-.724-1.517-1.167-2.98-1.167-4.26C4.85 5.107 8.067 1.85 12 1.85c3.933 0 7.15 3.257 7.15 7.311z"
        stroke={props.color || 'currentColor'}
        strokeWidth={1.7}
      />
      <circle cx={12} cy={9} r={2.35} stroke={props.color || 'currentColor'} strokeWidth={1.3} />
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgMapMarker)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
