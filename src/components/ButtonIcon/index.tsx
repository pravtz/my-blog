import { ButtonHTMLAttributes} from "react";
import React from "react";
import { BsCheck } from "react-icons/bs"

interface IconTypeProps {
    size: string
    color: string;
    id: string;
}

type ButtonIcomType = ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: (props: IconTypeProps) => JSX.Element
    colorIcon?: string
    bgButton?: string
    sizeIcon?: string
    children?: React.ReactNode
}

export const ButtonIcon = ({ icon = BsCheck, colorIcon = "#000", bgButton, sizeIcon = "1.25em",children,  ...rest }: ButtonIcomType) => {
    return (

        <button {...rest} >
          <div className="flex items-center">
            {React.createElement(icon, { id: 'iconSVG', size: sizeIcon, color: colorIcon })}
            {children}
          </div>
        </button>
    )
}