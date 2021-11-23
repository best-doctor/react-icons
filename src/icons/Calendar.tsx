import * as React from 'react'

function SvgCalendar(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" ref={svgRef} {...props}>
      <path
        d="M14.168 2.5h3.333a.833.833 0 01.834.833v13.334a.833.833 0 01-.834.833h-15a.833.833 0 01-.833-.833V3.333a.833.833 0 01.833-.833h3.334V.833H7.5V2.5h5V.833h1.667V2.5zm-1.667 1.667h-5v1.666H5.835V4.167h-2.5V7.5h13.333V4.167h-2.5v1.666h-1.667V4.167zm4.167 5H3.335v6.666h13.333V9.167z"
        fill={props.color || 'currentColor'}
      />
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgCalendar)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
