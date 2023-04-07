import { artist, artistAction } from '../../shared/interfaces/artist.interface';
import * as actionTypes from '../actions/actionTypes';

export const addArtist = (artist: artist) => {
    const action : artistAction = {
        type: actionTypes.ADD_ARTIST,
        artist
    }
    return action;
}

export const removeArtist = (artist: artist) =>{
    const action : artistAction = {
        type: actionTypes.REMOVE_ARTIST,
        artist
    }
    return action;
}