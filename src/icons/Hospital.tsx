import * as React from 'react'

function SvgHospital(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.791 2.099a.2.2 0 00-.2.2v6.4a1.1 1.1 0 01-1.1 1.1H2.975a.2.2 0 00-.2.2v12.3c0 .11.09.2.2.2h4.422a.2.2 0 00.2-.2v-4.05a1.8 1.8 0 011.8-1.8h4.956a1.8 1.8 0 011.8 1.8v4.05c0 .11.09.2.2.2h4.422a.2.2 0 00.2-.2V9.449a.2.2 0 00-.2-.2h-3.516a1.1 1.1 0 01-1.1-1.1v-5.85a.2.2 0 00-.2-.2H7.79zm-1.8.2a1.8 1.8 0 011.8-1.8h8.168a1.8 1.8 0 011.8 1.8v5.35h3.016a1.8 1.8 0 011.8 1.8v12.85a1.8 1.8 0 01-1.8 1.8h-4.422a1.8 1.8 0 01-1.8-1.8v-4.05a.2.2 0 00-.2-.2H9.397a.2.2 0 00-.2.2v4.05a1.8 1.8 0 01-1.8 1.8H2.975a1.8 1.8 0 01-1.8-1.8v-12.3a1.8 1.8 0 011.8-1.8h3.016v-5.9z"
        fill={props.color || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.625 4.545h-1.5v2.25h-2.25v1.5h2.25v2.25h1.5v-2.25h2.25v-1.5h-2.25v-2.25z"
        fill={props.color || 'currentColor'}
      />
      <path
        d="M11.047 12.7a.7.7 0 111.4 0v1.263a.7.7 0 11-1.4 0V12.7zM14.147 12.7a.7.7 0 111.4 0v1.263a.7.7 0 11-1.4 0V12.7zM17.247 12.7a.7.7 0 111.4 0v1.263a.7.7 0 11-1.4 0V12.7zM17.247 17.207a.7.7 0 111.4 0v1.263a.7.7 0 11-1.4 0v-1.263zM7.947 12.7a.7.7 0 111.4 0v1.263a.7.7 0 11-1.4 0V12.7zM4.847 12.7a.7.7 0 111.4 0v1.263a.7.7 0 11-1.4 0V12.7zM4.847 17.207a.7.7 0 111.4 0v1.263a.7.7 0 11-1.4 0v-1.263z"
        fill={props.color || 'currentColor'}
      />
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgHospital)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
