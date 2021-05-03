import { render } from './test/test-utils'
import Footer from "./components/Footer";
import {imageURLs} from "./static/images/imageURLs";
import {fireEvent, screen} from "@testing-library/react";
import store from './test/test-store'

const initialState = {
  imageData: {imageURLs, loading: false}
};

// const thunk = ({ dispatch, getState }) => next => action => {
//   if (typeof action === 'function') {
//     return action(dispatch, getState)
//   }
//
//   return next(action)
// }
//
// const create = () => {
//   const store = {
//     getState: jest.fn(() => ({})),
//     dispatch: dispatch({type: IMAGE_URL_REQUEST_TO_ADD_MARIO}),
//     subscribe: jest.fn()
//   }
//   const next = jest.fn()
//
//   const invoke = action => thunk(store)(next)(action)
//
//   return { store, next, invoke }
// }


test('renders footer correctly', () => {
  render(<Footer/>, {initialState, store})
  expect(screen.getByText(/add mario?/i)).toBeInTheDocument()
  fireEvent.click(screen.getByText(/Add Mario?/))
  expect(screen.getByText(/hey, alright/i)).toBeInTheDocument()
});
