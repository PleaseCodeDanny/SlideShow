import {
    IMAGE_URL_REQUEST_TO_ADD_MARIO,
    IMAGE_URL_SUCCESS_TO_ADD_MARIO,
    MARIO_IMAGE_URL
} from "../constants/imageConstants";

export const addMarioToImageList = () => async (dispatch) => {

    dispatch({type: IMAGE_URL_REQUEST_TO_ADD_MARIO});
    //Uncomment to check loading indicator
    const setTimeoutPromise = (timeout) =>
      new Promise((resolve) => setTimeout(resolve, timeout));
    await setTimeoutPromise(2000);

    dispatch({
        type: IMAGE_URL_SUCCESS_TO_ADD_MARIO,
        payload: MARIO_IMAGE_URL,
    });
};