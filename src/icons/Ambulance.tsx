import * as React from 'react'

function SvgAmbulance(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgRef}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.707 3.998a2 2 0 014 0V4.9h2.537L24 12.677v7.39h-3.044a2.735 2.735 0 01-5.23 0H8.274a2.735 2.735 0 01-5.23 0H0V4.9h11.707v-.902zm2-.42a.43.43 0 00-.439.42V4.9h.878v-.902a.43.43 0 00-.439-.42zM1.561 6.48v12.009h1.483a2.735 2.735 0 015.23 0h7.453a2.735 2.735 0 015.23 0h1.482v-4.759h-8.293V7.317h3.937l-.62-.838H1.56zm14.146 2.417v3.254h5.953l-2.409-3.254h-3.544zM5.66 18.133c-.66 0-1.171.529-1.171 1.144 0 .615.51 1.144 1.17 1.144.661 0 1.171-.529 1.171-1.144a1.16 1.16 0 00-1.17-1.144zm12.683 0c-.66 0-1.171.529-1.171 1.144 0 .615.51 1.144 1.17 1.144.66 0 1.171-.529 1.171-1.144a1.16 1.16 0 00-1.17-1.144zM6.39 7.903h1.463v2.296h2.196v1.53H7.853v2.296H6.39V11.73H4.195V10.2H6.39V7.903z"
        fill={props.color || 'currentColor'}
      />
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgAmbulance)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
