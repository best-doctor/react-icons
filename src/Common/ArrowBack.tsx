import React, { forwardRef, SVGAttributes } from 'react'

export const ArrowBack = forwardRef<SVGSVGElement, SVGAttributes<SVGSVGElement>>(
  ({ color = 'currentColor', ...rest }, ref): JSX.Element => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" ref={ref} {...rest}>
      <path
        fill={color}
        fillRule="evenodd"
        d="M3.857 7.74a.31.31 0 00.495-.096.285.285 0 00-.065-.32l-1.913-1.85h7.774a3.4 3.4 0 012.363.947 3.18 3.18 0 01.98 2.286 3.18 3.18 0 01-.98 2.286 3.4 3.4 0 01-2.363.947h-6.48a.312.312 0 00-.216.086.289.289 0 000 .416.31.31 0 00.215.086h6.481a4.018 4.018 0 002.793-1.12 3.759 3.759 0 001.157-2.7 3.759 3.759 0 00-1.157-2.703 4.018 4.018 0 00-2.793-1.119H2.375l1.912-1.85a.294.294 0 00.096-.209.285.285 0 00-.089-.213.305.305 0 00-.22-.086.312.312 0 00-.217.093l-2.43 2.352a.29.29 0 000 .415l2.43 2.351z"
        clipRule="evenodd"
      />
      <path
        fill={color}
        d="M4.072 7.826v.4-.4zm-.215-.087l.278-.287-.278.287zm.383.037l-.217-.336.217.336zm.112-.132l.368.157-.368-.157zm.018-.17l-.392.08.392-.08zm-.083-.15l.278-.287-.278.287zm-1.913-1.85v-.4h-.988l.71.688.278-.288zm10.137.947l-.278.288.278-.288zm0 4.572l-.278-.287.278.287zm-9.059 1.033l.279.288-.279-.288zm0 .416l.279-.288-.279.288zm9.489-6.437l-.278.288.278-.288zM2.375 4.886L2.097 4.6l-.711.687h.989v-.4zm1.912-1.85l-.268-.296-.01.01.278.287zm.074-.324l-.369.154.37-.154zm-.067-.098l-.278.287.278-.287zm-.22-.086l.007.4-.007-.4zm-.118.025l-.159-.367.159.367zm-.099.068l.278.288.01-.01-.288-.278zm-2.43 2.352l-.278-.288.278.288zm0 .415l-.279.287.279-.287zm2.645 2.038c.021 0 .044.008.063.026l-.556.575a.71.71 0 00.493.199v-.8zm-.049.014a.089.089 0 01.049-.014v.8c.136 0 .27-.04.386-.114l-.435-.672zm-.038.047a.104.104 0 01.038-.047l.435.672a.696.696 0 00.262-.31l-.735-.315zm-.007.068a.115.115 0 01.007-.068l.735.314a.685.685 0 00.041-.407l-.783.16zm.03.056a.109.109 0 01-.03-.056l.783-.161a.691.691 0 00-.196-.357l-.557.574zm-1.912-1.85l1.912 1.85.557-.575-1.912-1.85-.557.576zm8.052-.687H2.374v.8h7.774v-.8zm2.642 1.06a3.8 3.8 0 00-2.642-1.06v.8a3 3 0 012.085.835l.556-.575zm1.1 2.573a3.58 3.58 0 00-1.1-2.573l-.557.575a2.78 2.78 0 01.857 1.998h.8zm-1.1 2.574a3.58 3.58 0 001.1-2.574h-.8a2.78 2.78 0 01-.857 1.999l.556.575zm-2.642 1.06a3.8 3.8 0 002.642-1.06l-.557-.575a3 3 0 01-2.085.834v.8zm-6.48 0h6.48v-.8h-6.48v.8zm.063-.027a.09.09 0 01-.064.026v-.8a.71.71 0 00-.493.199l.557.575zm.032-.08a.11.11 0 01-.032.08l-.557-.575a.689.689 0 00-.21.495h.8zm-.032-.08c.019.02.032.047.032.08h-.8a.69.69 0 00.211.495l.557-.575zm-.064-.026a.09.09 0 01.064.026l-.557.575a.71.71 0 00.493.199v-.8zm6.481 0h-6.48v.8h6.48v-.8zm2.515-1.007a3.618 3.618 0 01-2.515 1.007v.8c1.15 0 2.255-.442 3.071-1.232l-.556-.575zm1.035-2.414c0 .903-.37 1.772-1.035 2.414l.556.575a4.16 4.16 0 001.279-2.989h-.8zm-1.035-2.414a3.359 3.359 0 011.035 2.414h.8a4.159 4.159 0 00-1.279-2.99l-.556.576zm-2.515-1.007c.946 0 1.85.364 2.515 1.007l.556-.575a4.418 4.418 0 00-3.07-1.232v.8zm-7.773 0h7.773v-.8H2.375v.8zM4.008 2.75L2.097 4.6l.556.575 1.912-1.85-.557-.575zm-.014.025a.106.106 0 01.025-.034l.535.594a.694.694 0 00.166-.225l-.726-.335zm-.01.046c0-.016.003-.032.01-.046l.726.335a.686.686 0 00.063-.275l-.8-.014zm.008.046a.114.114 0 01-.009-.046l.8.014a.686.686 0 00-.053-.276l-.738.308zm.024.035a.107.107 0 01-.024-.035l.738-.308a.693.693 0 00-.158-.232l-.556.575zm.032.02a.095.095 0 01-.032-.02l.556-.575a.705.705 0 00-.233-.15l-.291.746zm.033.007a.087.087 0 01-.033-.006l.29-.745a.713.713 0 00-.27-.049l.013.8zm.033-.007a.088.088 0 01-.033.007l-.014-.8a.712.712 0 00-.27.058l.317.735zm.031-.022a.096.096 0 01-.03.022l-.318-.735a.704.704 0 00-.228.158l.576.555zm-2.44 2.36l2.43-2.351-.556-.575-2.43 2.351.556.575zm.033-.08a.11.11 0 01-.033.08l-.557-.575a.69.69 0 00-.21.495h.8zm-.033-.08a.11.11 0 01.033.08h-.8a.69.69 0 00.21.495l.557-.574zm2.43 2.352L1.705 5.1l-.556.575 2.43 2.35.556-.574z"
      />
    </svg>
  )
)
