export function CreateButton(props) {
    const {className, buttonText, onClick = ()=>{}} = props;
    return (
        <button className={className} onClick={onClick}>{buttonText}</button>
    )
}