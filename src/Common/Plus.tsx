import React, { forwardRef, SVGAttributes } from 'react'

export const Plus = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>(
  ({ color = 'currentColor', ...rest }, ref): JSX.Element => (
    <svg ref={ref} viewBox="0 0 10 10" fill={color} xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path d="M4.333 4.333v-4h1.334v4h4v1.334h-4v4H4.333v-4h-4V4.334h4z" />
    </svg>
  )
)
