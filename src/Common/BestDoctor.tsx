import React, { forwardRef, SVGAttributes } from 'react'

export const BestDoctor = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>(
  ({ color = '#FF6D6D', ...rest }, ref): JSX.Element => (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 78 78" {...rest} ref={ref}>
      <path
        d="M78 43.549H52.912c-1.081 0-1.622 1.304-.859 2.068l17.743 17.75-6.423 6.426-17.711-17.719c-.763-.763-2.067-.223-2.067.859V78H34.5V52.933c0-1.082-1.304-1.622-2.067-.859l-17.807 17.75L8.204 63.4l17.743-17.75c.763-.764.223-2.068-.858-2.068H0v-9.098h25.088c1.082 0 1.622-1.304.86-2.068L8.203 14.633l6.423-6.426 17.711 17.719c.764.763 2.067.222 2.067-.86V0H43.5v25.067c0 1.081 1.304 1.622 2.067.859L63.278 8.207l6.518 6.426-17.743 17.75c-.763.764-.222 2.068.859 2.068H78v9.098Z"
        fill={color}
      />
    </svg>
  )
)
