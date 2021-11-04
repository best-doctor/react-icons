import * as React from 'react'

function SvgArrowBack(props: React.SVGProps<SVGSVGElement>, svgRef?: React.Ref<SVGSVGElement>) {
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
        d="M5.785 11.609a.464.464 0 00.743-.143.428.428 0 00-.099-.48L3.561 8.21h11.66a5.1 5.1 0 013.545 1.42 4.77 4.77 0 011.468 3.43 4.77 4.77 0 01-1.468 3.429 5.1 5.1 0 01-3.544 1.42H5.5a.463.463 0 00-.322.13.434.434 0 000 .623c.085.082.201.129.322.129h9.721a6.027 6.027 0 004.19-1.679 5.638 5.638 0 001.735-4.052c0-1.52-.625-2.978-1.736-4.053a6.027 6.027 0 00-4.188-1.678H3.562l2.867-2.775a.442.442 0 00.145-.314.428.428 0 00-.133-.32.457.457 0 00-.33-.13.468.468 0 00-.326.141l-3.639 3.52"
        fill={props.color || 'currentColor'}
      />
      <path
        d="M6.107 11.738v.4-.4zm-.322-.129l-.301.263.01.013.013.011.278-.287zm.769-.398l-.392.081.392-.08zm-.125-.225l.278-.287-.278.287zM3.561 8.21v-.4h-.989l.71.688.279-.288zm15.205 1.42l.278-.287-.278.288zm0 6.859l-.278-.288.278.288zm.645.623l-.279-.287.278.287zm0-8.105l-.279.288.278-.288zM3.56 7.33l-.278-.288-.71.688h.988v-.4zM6.43 4.555l-.268-.297-.01.01.278.287zm.106-.143l-.364-.167.364.167zm.039-.171l.4.007-.4-.007zm-.033-.173l-.37.154.37-.154zm-.1-.147l.278-.287-.278.287zm-.152-.097l.146-.373-.146.373zm-.179-.032l-.006-.4.006.4zm-.177.038l.158.367-.158-.367zm-.148.102l.278.288.01-.01-.288-.278zm-3.639 3.52l-.278-.287-.273.264.25.287.301-.264zm3.961 3.886a.064.064 0 01-.044-.016l-.556.574a.864.864 0 00.6.242v-.8zm.036-.01a.067.067 0 01-.036.01v.8c.167 0 .33-.048.47-.138l-.434-.672zm.017-.02a.045.045 0 01-.017.02l.434.672a.844.844 0 00.318-.377l-.735-.314zm.002-.016c0 .005 0 .01-.002.017l.735.315a.827.827 0 00.05-.493l-.783.161zm-.011-.019c.007.007.01.014.01.019l.784-.16a.837.837 0 00-.238-.433l-.556.574zM3.283 8.5l2.868 2.774.556-.575L3.84 7.924l-.556.575zm11.939-.688H3.56v.8h11.66v-.8zm3.822 1.533a5.5 5.5 0 00-3.822-1.533v.8a4.7 4.7 0 013.266 1.308l.556-.575zm1.59 3.717a5.17 5.17 0 00-1.59-3.717l-.556.575a4.37 4.37 0 011.346 3.142h.8zm-1.59 3.716a5.171 5.171 0 001.59-3.716h-.8a4.37 4.37 0 01-1.346 3.141l.556.575zm-3.822 1.533a5.5 5.5 0 003.822-1.533l-.556-.575a4.7 4.7 0 01-3.266 1.308v.8zm-9.722 0h9.722v-.8H5.5v.8zm-.044.017a.064.064 0 01.044-.017v-.8a.864.864 0 00-.6.242l.556.575zm-.012.024c0-.006.003-.015.012-.024l-.557-.575a.834.834 0 00-.255.599h.8zm.012.024a.034.034 0 01-.012-.024h-.8c0 .227.094.443.255.6l.557-.576zm.044.017a.064.064 0 01-.044-.017l-.557.575a.864.864 0 00.6.242v-.8zm9.721 0H5.5v.8h9.722v-.8zm3.911-1.566a5.627 5.627 0 01-3.91 1.566v.8c1.673 0 3.28-.643 4.467-1.791l-.557-.575zm1.614-3.765c0 1.41-.579 2.764-1.614 3.765l.557.575a6.038 6.038 0 001.857-4.34h-.8zm-1.614-3.765a5.238 5.238 0 011.614 3.765h.8c0-1.63-.67-3.192-1.857-4.34l-.557.575zm-3.91-1.566c1.469 0 2.875.564 3.91 1.566l.557-.575a6.427 6.427 0 00-4.467-1.791v.8zm-11.66 0h11.66v-.8H3.562v.8zM6.15 4.268L3.283 7.042l.556.575 2.868-2.774-.556-.575zm.02-.023a.041.041 0 01-.01.013l.536.594a.842.842 0 00.201-.273l-.727-.334zm.003-.012c0 .004 0 .008-.003.012l.727.334a.829.829 0 00.076-.331l-.8-.015zm-.002-.011a.028.028 0 01.002.011l.8.015a.828.828 0 00-.064-.335l-.738.309zm-.01-.014a.04.04 0 01.01.014l.738-.308a.84.84 0 00-.191-.28l-.556.574zm-.018-.011a.057.057 0 01.019.011l.556-.574a.857.857 0 00-.284-.183l-.291.746zm-.027-.005a.07.07 0 01.027.005l.29-.746a.87.87 0 00-.33-.059l.013.8zm-.026.005a.069.069 0 01.026-.005l-.013-.8a.868.868 0 00-.33.07l.317.735zm-.018.013a.056.056 0 01.018-.013l-.316-.734a.856.856 0 00-.278.192l.576.555zM2.425 7.74l3.638-3.52-.556-.575-3.639 3.52.557.575zm-.58-.024l3.639 4.156.602-.527L2.447 7.19l-.602.527z"
        fill={props.color || 'currentColor'}
      />
    </svg>
  )
}

const ForwardRef = React.forwardRef(SvgArrowBack)
const MemoForwardRef = React.memo(ForwardRef)
export default MemoForwardRef
