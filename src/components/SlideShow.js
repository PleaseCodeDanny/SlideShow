import React, {Component, Fragment} from "react";

class SlideShow extends Component {
    constructor(props) {
        super(props);
        this.state =
            {
                imageURLs: ['url1', 'url2'],
                message: 'Hello World'
            }
    }

    componentDidMount() {
        this.setState((state, props) => {
            console.log(state, props)
            return {message: props.message}
        })
    }

    render() {
        return( <Fragment>
            <h2>{`${this.state.message}-${this.state.imageURLs}`}</h2>
            {this.state.message !== 'Hello World' && <h2>{this.state.imageURLs}</h2>}
        </Fragment>)
    }
}

export default SlideShow

