import { ChangeEvent } from "react"
import { MouseEvent } from "react"
import styled from "styled-components"

type ButtonPropsType = {
name: string
disabled?: boolean
callBack: ()=> void
}



export const Button: React.FC<ButtonPropsType> = ({name, callBack, disabled}) => {
    const buttonHandler = () => {
        callBack()
    }
    return(
        <StyledButton disabled={disabled} onClick={buttonHandler}>{name}</StyledButton>
    )
}

type StyledButtonPropsType = {
    color?: string
    disabled?: boolean
}

const StyledButton = styled.button<StyledButtonPropsType>`
    width: 90px;
    height: 40px;
    border-radius: 6px;
    background-color: ${props => props.disabled ? 'grey': 'blue'}
`