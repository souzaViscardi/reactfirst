let CoreConcept = (props) => {
    
    let {image, title, description} = props
    return(
        <li>
            <img src={image}></img>
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    )
}

export default CoreConcept