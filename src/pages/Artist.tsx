import React, {  useCallback, useState } from "react";
import Header from "../components/header";
import ArtistItem from "../components/artistItem";
import NewButton from "../components/buttonNew";
import { useDispatch, useSelector } from "react-redux";
import { artist, artistState } from "../shared/interfaces/artist.interface";
import { RootState } from "../store/reducers/__index";
import { Modal } from "../components/modal";
import useModal from "../hooks/useModal";
import AddForm from "../components/addNewForm";
import { addArtist, removeArtist } from "../store/actions/actionCreators";
import { Dispatch } from "redux";


const Artists = () => {
    const dispatch: Dispatch<any> = useDispatch()
    const  {isOpen, onClose} = useModal();
    
   
    const artistsData  = useSelector(
        (state : RootState ) => state.artist
    );    
    console.log(artistsData);
    
const newArtistData = useCallback(
    (artist: artist) => dispatch(addArtist(artist)),
    [dispatch]
  )
return (
    <div className="wrapper">
          {
            isOpen && (
                  <AddForm  newArtistData={newArtistData} isOpen={isOpen} toggle={onClose}/>
            )
          }

        <div className="container">
            <Header/>
            <h1>(2023)</h1>
            <h1>mtv Artist of the year</h1>
            <section className="artistlist">
                {artistsData.artists.map((item: artist) => (
                    <ArtistItem
                    key={item.id}
                    artist={item}
                    removeArtist={removeArtist}
                    />
                ))}
                <NewButton onclick={onClose}/>
                
            </section>
            
        </div>
    </div>
)

}
export default Artists;