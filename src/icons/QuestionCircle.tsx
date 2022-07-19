import * as React from 'react'

function SvgQuestionCircle(
  props: React.SVGProps<SVGSVGElement>,
  svgRef?: React.Ref<SVGSVGElement>
) {
  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" ref={svgRef} {...props}>
      <path
        d="M7.267 13.333a6.067 6.067 0 110-12.133 6.067 6.067 0 010 12.133z"
        stroke={props.color || 'currentColor'}
        strokeWidth={1.2}
      />
      <path
        d="M6.722 8.406h1.04v-.081c.007-.662.222-.966.732-1.278.575-.344.934-.813.934-1.528 0-1.056-.822-1.719-2.015-1.719-1.094 0-1.982.606-2.013 1.794h1.113c.028-.588.453-.869.893-.869.478 0 .863.319.863.81 0 .437-.29.737-.669.974-.553.344-.872.691-.878 1.816v.081zm.547 1.95a.696.696 0 00.687-.687.694.694 0 00-.687-.681.684.684 0 100 1.369z"
        fill={props.color || 'currentColor'}
      />
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgQuestionCircle)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
