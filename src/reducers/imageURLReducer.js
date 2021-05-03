import {IMAGE_URL_REQUEST_TO_ADD_MARIO, IMAGE_URL_SUCCESS_TO_ADD_MARIO} from "../constants/imageConstants";

export const imageURLReducer = (state = { imageURLs: [] }, action) => {
    switch (action.type) {
        case IMAGE_URL_REQUEST_TO_ADD_MARIO:
            return { loading: true, imageURLs: [...state.imageURLs] };
        case IMAGE_URL_SUCCESS_TO_ADD_MARIO:
            return { loading: false, imageURLs: [...state.imageURLs, action.payload] };
        default:
            return state;
    }
};