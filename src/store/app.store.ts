import { legacy_createStore as createStore } from "redux";
import reducers from "./reducers/__index";
export const store = createStore(
        reducers,
);

