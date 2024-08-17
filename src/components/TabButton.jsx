
export default function TabButton ({children, click, isSelected}){

    return(
        <button className={isSelected?  "active" : ""} onClick={click}>{children}</button>
    )
}