import * as React from 'react'

function SvgPhone(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
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
        d="M6.586 17.425C10.129 20.968 14.034 23 17.288 23c1.979 0 3.308-.551 4.428-1.825.09-.09.181-.19.263-.28l.081-.09c.624-.723.94-1.455.94-2.187 0-.858-.506-1.653-1.518-2.358l-3.227-2.24-.063-.046c-1.14-.74-2.12-.854-3.014.031l-.886.886c-.199.18-.334.153-.488.054-.624-.389-1.835-1.464-2.603-2.232l-.217-.217c-.832-.84-1.519-1.671-1.898-2.258-.1-.19-.118-.317.1-.533l.903-.913c.859-.903.682-1.928-.096-3.049L7.752 2.518l-.063-.09C7.01 1.488 6.242 1.009 5.393 1h-.036c-.733 0-1.492.343-2.242 1.012l-.28.244C1.55 3.412 1 4.74 1 6.7c0 3.27 2.034 7.174 5.586 10.724zM4.489 3.62c.298-.262.624-.406.904-.406.307 0 .524.117.687.379l2.15 3.225.028.046c.19.307.385.401.132.654l-1.03 1.03c-.706.75-.75 1.735-.118 2.584.624.84 1.717 2.087 2.603 2.954.886.904 2.232 2.097 3.064 2.711.877.65 1.89.587 2.648-.172l1.013-1.012c.253-.226.302-.058.618.141l3.281 2.187c.235.18.335.379.335.668 0 .28-.145.605-.407.903l-.18.208c-.706.814-1.682 1.238-2.92 1.256h-.1c-2.567 0-6.047-1.88-9.11-4.933C4.95 12.926 2.96 9.258 3.015 6.701c.027-1.202.46-2.204 1.265-2.91l.063-.053.046-.039c.028-.024.058-.05.099-.079z"
        fill={props.color || 'currentColor'}
      />
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgPhone)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef