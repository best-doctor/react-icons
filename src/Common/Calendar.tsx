import React, { forwardRef, SVGAttributes } from 'react'

export const Calendar = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>(
  ({ color = 'currentColor', ...rest }, ref): JSX.Element => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" {...rest} ref={ref}>
      <path
        fill={color}
        d="M14.166 2.5h3.333a.833.833 0 01.834.833v13.334a.833.833 0 01-.834.833h-15a.834.834 0 01-.833-.833V3.333a.833.833 0 01.833-.833h3.334V.833h1.666V2.5h5V.833h1.667V2.5zm-1.667 1.667h-5v1.666H5.833V4.167h-2.5V7.5h13.333V4.167h-2.5v1.666h-1.667V4.167zm4.167 5H3.333v6.666h13.333V9.167z"
      />
    </svg>
  )
)
