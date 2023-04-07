import { combineReducers } from "redux";
import artistReducer from "./artistReducer";


const reducers = combineReducers({
    artist: artistReducer,
})
export default reducers;

export type RootState = ReturnType<typeof reducers>;
