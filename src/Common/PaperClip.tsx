import React, { forwardRef, SVGAttributes } from 'react'

export const PaperClip = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>(
  ({ color = 'currentColor', ...rest }, ref): JSX.Element => (
    <svg ref={ref} viewBox="0 0 17 18" fill={color} xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="M16.08 8.288L9.188 15.18A4.502 4.502 0 012.82 8.813L9.713 1.92a3.002 3.002 0 114.245 4.245l-6.9 6.893a1.501 1.501 0 01-2.123-2.123l6.368-6.36"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
)
