import React, { forwardRef, SVGAttributes } from 'react'

export const MapMarker = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>(
  ({ color = 'currentColor', ...rest }, ref): JSX.Element => (
    <svg ref={ref} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" {...rest}>
      <path
        stroke={color}
        strokeWidth="1.7"
        d="M12.483 6.108c0 .793-.277 1.724-.75 2.717-.47.983-1.104 1.968-1.753 2.853A30.016 30.016 0 018 14.094a30.019 30.019 0 01-1.981-2.417c-.649-.884-1.283-1.869-1.753-2.852-.474-.993-.75-1.924-.75-2.717 0-2.552 2.023-4.591 4.483-4.591 2.46 0 4.484 2.039 4.484 4.59z"
      />
      <circle cx="8" cy="6" r="1.35" stroke={color} strokeWidth="1.3" />
    </svg>
  )
)
