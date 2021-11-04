import * as React from 'react'

function SvgHome(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
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
        d="M11.468 1.671a.75.75 0 011.064 0l9.8 9.863a.75.75 0 01.046 1.006l-.221.268a.75.75 0 01-1.11.051l-.32-.321V21.8a.75.75 0 01-.75.75h-6.004a.75.75 0 01-.75-.75v-6.08c0-.82-.597-1.398-1.218-1.398-.628 0-1.227.58-1.227 1.408v6.07a.75.75 0 01-.75.75H4.024a.75.75 0 01-.75-.75v-9.264l-.32.323a.75.75 0 01-1.111-.051l-.221-.268a.75.75 0 01.046-1.006l9.8-9.863zm-6.385 9.045v9.953h3.886V15.73c0-1.763 1.313-3.29 3.036-3.29 1.719 0 3.027 1.522 3.027 3.28v4.949h3.886v-9.952L12 3.754l-6.917 6.962z"
        fill={props.color || 'currentColor'}
      />
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgHome)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
