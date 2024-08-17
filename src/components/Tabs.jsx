import { Children } from "react"

export const Tabs = ({buttons, children, buttonsContainer}) => {
    const ButtonsContainer = buttonsContainer
    return(
        <>
        <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    )
}