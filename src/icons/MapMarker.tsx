import * as React from 'react'

function SvgMapMarker(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        d="M12.483 6.107c0 .794-.277 1.725-.75 2.718-.47.983-1.104 1.968-1.753 2.853A30.042 30.042 0 018 14.094a30.045 30.045 0 01-1.981-2.417c-.649-.884-1.283-1.869-1.753-2.852-.474-.993-.75-1.924-.75-2.718 0-2.551 2.023-4.59 4.483-4.59 2.46 0 4.484 2.039 4.484 4.59z"
        stroke={props.color || 'currentColor'}
        strokeWidth={1.7}
      />
      <circle cx={8} cy={6} r={1.35} stroke={props.color || 'currentColor'} strokeWidth={1.3} />
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgMapMarker)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
