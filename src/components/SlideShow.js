import React, {Component, Fragment} from "react";
import {Button, Col, Image, Row} from "react-bootstrap";
import {connect} from "react-redux";

class SlideShow extends Component {
    constructor(props) {
        super(props);
        this.handleNext = this.handleNext.bind(this)
        this.handlePrev = this.handlePrev.bind(this)
        this.toggleSlideShow = this.toggleSlideShow.bind(this)
        this.state =
            {
                message: 'Hello World',
                currentSlideIndex: 0,
                looping: false
            }
    }

    componentDidMount() {
        this.setState((state, props) => {
            console.log(state, props)
            return {message: props.message}
        })
    }

    handleNext() {
        this.setState((prevState, props) => {
                return prevState.currentSlideIndex + 1 < props.imageURLs.length ? {
                    currentSlideIndex: prevState.currentSlideIndex + 1
                } : {currentSlideIndex: 0}
            }
        )
    }

    handlePrev() {
        this.setState((prevState, props) => {
                return prevState.currentSlideIndex - 1 >= 0 ? {
                    currentSlideIndex: prevState.currentSlideIndex - 1
                } : {currentSlideIndex: props.imageURLs.length - 1}
            }
        )
    }

    toggleSlideShow() {
        if (!this.loop || this.state.looping === false){
            this.setState(() => {
                return {looping: true}
            })
            this.loop = setInterval(() => {
                this.handleNext()
            },this.props.interval)
        } else {
            clearInterval(this.loop)
            this.setState(() => {
                return {looping: false}
            })
        }
    }

    render() {
        //Calculate the next curr and prev images for display.
        let prev,curr,next = null
        if (this.props.imageURLs){
            prev = this.state.currentSlideIndex - 1 >= 0 ? this.props.imageURLs[this.state.currentSlideIndex - 1] : this.props.imageURLs[this.props.imageURLs.length - 1];
            curr = this.props.imageURLs[this.state.currentSlideIndex];
            next = this.state.currentSlideIndex + 1 < this.props.imageURLs.length ? this.props.imageURLs[this.state.currentSlideIndex + 1] : this.props.imageURLs[0];
        }

        return (
            <Fragment>
                <Row id={'image-row'}>
                    <Col className={'col'} sm={1} md={2} lg={3} xl={2}>
                        <Row className={'prev-image-row'}>
                            <Image className={'image'} src={prev} alt={'mario?'} fluid/>
                        </Row>
                        <Row>
                            <Button
                                type='button'
                                className={'my-3 btn btn-md'}
                                onClick={this.handlePrev}
                            >PREV</Button>
                        </Row>
                    </Col>
                    <Col className={'col'} sm={10} md={8} lg={6} xl={8}>
                        <Row className={'main-image-row'}>
                            <Image className={'image'} src={curr} alt={'mario?'} fluid/>
                        </Row>
                        <Row>
                            <Button
                                type='button'
                                className={'my-3 btn btn-md'}
                                onClick={this.toggleSlideShow}
                            >{this.state.looping ? 'STOP SLIDESHOW' : 'START SLIDESHOW'}</Button>
                        </Row>
                    </Col>
                    <Col className={'col'} sm={1} md={2} lg={3} xl={2}>
                        <Row className={'next-image-row'}>
                            <Image className={'image'} src={next} alt={'mario?'} fluid/>
                        </Row>
                        <Row>
                            <Button
                                type='button'
                                className={'my-3 btn btn-md'}
                                onClick={this.handleNext}
                            >NEXT</Button>
                        </Row>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({ imageURLs: state.imageData.imageURLs })

export default connect(mapStateToProps)(SlideShow)

