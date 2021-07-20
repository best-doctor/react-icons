import React, { forwardRef, SVGAttributes } from 'react'

export const Calendar = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>(
  ({ color = 'currentColor', ...rest }, ref): JSX.Element => (
    <svg
      ref={ref}
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M17 4h4a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V5a1 1 0 011-1h4V2h2v2h6V2h2v2zm-2 2H9v2H7V6H4v4h16V6h-3v2h-2V6zm5 6H4v8h16v-8z"
        fill={color}
      />
    </svg>
  )
)
