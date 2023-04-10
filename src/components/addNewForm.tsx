import React, { useState } from "react";
import { artist } from "../shared/interfaces/artist.interface";
import { Modal } from "./modal";

 type newArtistProps = {
        newArtistData: (artist: artist | any) => void,      
        isOpen: boolean,
    toggle: () => void,
    }
const AddForm: React.FC<newArtistProps> = ( {newArtistData, isOpen, toggle}) => {

    const [newArtist, setNewArtist] = useState<artist | {}>()
    console.log(newArtist);

    const handleArtistData = (e : React.FormEvent<HTMLInputElement>) => {
        setNewArtist({
            ...newArtist,
            [e.currentTarget.id] : e.currentTarget.value,
        })
    }

    const addNewArtist = (e: React.FormEvent) => {  
    e.preventDefault()
    newArtistData(newArtist)
  }
    return (
        
        <Modal title="haha" isOpen={isOpen} toggle={toggle} >
                    <form onSubmit={addNewArtist} className="modal-form" action="">
                        <input id="name" onChange={handleArtistData} className="modal-form--input" type="text" placeholder="Artist name" />
                        <input id="image" onChange={handleArtistData} className="modal-form--input" type="text" placeholder="Artist image"  />
                        <button  className="modal-form--buton" type="submit">Submit</button>
                    </form>
            </Modal>

        
    )

}
export default AddForm;