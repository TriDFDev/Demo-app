import React,{useCallback} from "react";
import { GrClose } from "react-icons/gr";
import { artist } from "../shared/interfaces/artist.interface";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";


type removeProps = {
    artist: artist,
    removeArtist : (artist: artist) => void
}

const ArtistItem : React.FC<removeProps> = ({artist, removeArtist}) => {

    const dispatch : Dispatch<any> = useDispatch()
    
    const deleteArtist = useCallback(
        (artist: artist) => dispatch(removeArtist(artist)),
        [dispatch,removeArtist])

    return (
        <div className="artistItem" >
            <div className="artistItem--image">
                <img src={artist.image} alt="" />
            </div>
            <div className="artistItem--back">
                <div onClick={()=> deleteArtist(artist)} className="remove--button">
                    <GrClose className="icon"/>
                </div>
                <p>{artist.name}</p>
            </div>
        </div>
    )
}
export default ArtistItem;