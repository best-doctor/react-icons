import React, { forwardRef, SVGAttributes } from 'react'

export const Check = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>(
  ({ color = 'currentColor', ...rest }, ref): JSX.Element => (
    <svg ref={ref} viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
      <path
        d="M3.833 5.85L9.195.488l.826.825L3.833 7.5.121 3.788l.825-.825L3.833 5.85z"
        fill={color}
      />
    </svg>
  )
)
