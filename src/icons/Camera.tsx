import * as React from 'react'

function SvgCamera(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
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
        d="M2.11 4c-.555 0-1.09.231-1.487.648A2.297 2.297 0 000 6.23v11.538c0 .597.226 1.166.623 1.583.397.417.932.648 1.487.648h13.187c.555 0 1.09-.231 1.486-.648.398-.417.624-.986.624-1.583v-.9l3.195 2.615a2.011 2.011 0 002.208.241c.353-.18.653-.463.864-.816.211-.354.325-.764.326-1.184V6.275a2.326 2.326 0 00-.326-1.184 2.155 2.155 0 00-.864-.816 2.01 2.01 0 00-2.21.241L17.408 7.13v-.9c0-.596-.226-1.165-.623-1.582A2.053 2.053 0 0015.296 4H2.11zm-.067 2.182a.093.093 0 01.067-.028h13.187c.028 0 .051.012.067.028a.07.07 0 01.02.049v11.538a.07.07 0 01-.02.05.093.093 0 01-.067.027H2.11a.093.093 0 01-.067-.028.07.07 0 01-.021-.049V6.231c0-.016.006-.033.02-.05zm19.836.021a.096.096 0 01.054.01c.016.008.028.02.035.031.007.012.01.024.01.035v11.488c0 .011-.003.023-.01.035a.085.085 0 01-.035.031.096.096 0 01-.104-.011l-4.422-3.658V9.838l4.42-3.612.003-.002a.093.093 0 01.049-.02z"
        fill={props.color || 'currentColor'}
      />
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgCamera)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
