import { useState } from "react";

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false)
    const onClose = () => {
        setIsOpen(!isOpen)
    }
    return {
        isOpen,
        onClose,
    }
}
export default useModal;