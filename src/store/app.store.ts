import { applyMiddleware, legacy_createStore as createStore } from "redux";
import reducers from "./reducers/__index";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk";
export const store = createStore(
        reducers,
        composeWithDevTools(
        applyMiddleware(thunk),
        ),
    
);

