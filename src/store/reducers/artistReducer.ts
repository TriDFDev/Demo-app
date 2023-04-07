import React from "react";
import { Action } from "redux";
import { artist, artistAction, artistState } from "../../shared/interfaces/artist.interface";
import * as actionTypes from '../actions/actionTypes';

const initalState : artistState = {

    artists: [
        {
            id: 1,
            name: 'Kendrick lamar',
            image: 'https://variety.com/wp-content/uploads/2017/11/kendrick-lamar-variety-hitmakers.jpg?w=1000',

        }
        ,
        {
            id:2,
            name: 'The Weeknd',
            image: 'https://cdns-images.dzcdn.net/images/artist/033d460f704896c9caca89a1d753a137/500x500.jpg',

        }
        ,
        {
            id:3,
            name: '21 Savage',
            image: 'https://media.newyorker.com/photos/5c59bb60e2fabe1577c2e1c1/1:1/w_1954,h_1954,c_limit/Younger-21SavageArrest.jpg',

        }
        ,
        {
            id:5,
            name: 'Justin Bieber',
            image: 'https://media.glamour.com/photos/6053b199e85026602fd7cdfa/master/w_2560%2Cc_limit/1230371382',

        } ,
        {
            id:4,
            name: 'Lil Nas X',
            image: 'https://static01.nyt.com/images/2021/09/22/arts/21lilnas-review1/21lilnas-review1-mediumSquareAt3X-v2.jpg',

        }
    ]
}

 const artistReducer = (state : artistState = initalState, action : artistAction) : artistState => {

    switch (action.type){
        case actionTypes.ADD_ARTIST :
            const newArtist : artist = {
           id: Math.random(),
           name: action.artist.name,
           image: action.artist.image,
        }
        return{
            ...state,
            artists: state.artists.concat(newArtist)

        }
        case actionTypes.REMOVE_ARTIST :
            const updateArtists : artist[] = state.artists.filter(
                artist => artist.id !== action.artist.id
            )
            return {
                ...state,
                artists: updateArtists
    

        }
    }
    return state;
}
export default artistReducer;