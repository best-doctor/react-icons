import React, { forwardRef, SVGAttributes } from 'react'

export const Copy = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>(
  ({ color = 'currentColor', ...rest }, ref): JSX.Element => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 16" {...rest} ref={ref}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M5.527.2a2.356 2.356 0 00-2.356 2.356h1.6c0-.418.339-.756.756-.756h5.165a.8.8 0 01.8.8v7.899a.785.785 0 01-.785.784v1.6a2.385 2.385 0 002.385-2.384v-7.9A2.4 2.4 0 0010.692.2H5.527zM2.599 3.114a2.4 2.4 0 00-2.4 2.4v7.883a2.4 2.4 0 002.4 2.4h5.12a2.4 2.4 0 002.4-2.4V5.514a2.4 2.4 0 00-2.4-2.4H2.6zm-.8 2.4a.8.8 0 01.8-.8h5.12a.8.8 0 01.8.8v7.883a.8.8 0 01-.8.8H2.6a.8.8 0 01-.8-.8V5.514z"
        clipRule="evenodd"
      />
    </svg>
  )
)
