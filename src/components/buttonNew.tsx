import React from "react";
interface  newButtonProps {
    onclick : () => void,
}
const NewButton = (props: newButtonProps) => {
    return (
        <div className="newButton" onClick={props.onclick}>
            <p>New</p>
        </div>
    )
}
export default NewButton;