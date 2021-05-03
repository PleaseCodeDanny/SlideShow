import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {imageURLReducer} from "./reducers/imageURLReducer";
import {imageURLs} from "./static/images/imageURLs";


const reducer = combineReducers({
    imageData: imageURLReducer,
});



const initialState = {
    imageData: {imageURLs, loading: false}
};
const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
