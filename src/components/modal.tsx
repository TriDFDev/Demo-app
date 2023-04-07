import React,{ReactNode} from "react";
import { GrClose } from "react-icons/gr";
import useModal from "../hooks/useModal";
interface ModalProps {
    children?: ReactNode,
    title: string,
    isOpen: boolean,
    toggle: () => void
}
export const Modal = (props: ModalProps) => {
    return (

        <div className="modal-overlay">
            <div className="modal-box">
                <div className="modal-button--close" onClick={props.toggle}>
                    <GrClose className="icon"/>
                </div>
                {props.children}
            </div>
        </div>

    )
}