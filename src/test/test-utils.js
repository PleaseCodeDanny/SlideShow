// test-utils.js
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import {combineReducers, createStore} from 'redux'
import { Provider } from 'react-redux'
// Import your own reducer


import {imageURLReducer} from "../reducers/imageURLReducer";

const reducer = combineReducers({
    imageData: imageURLReducer,
});

function render(
    ui,
    {
        initialState,
        store = createStore(reducer, initialState),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }