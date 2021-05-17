import React, {Fragment, useEffect, useState} from "react";
import {Button, Col, Image, Row} from "react-bootstrap";



function SlideShowFunctional(props) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [looping, setLooping] = useState(false)
    const [counter, setCounter] = useState(0)


    let prev,curr,next = null
    if (props.imageURLs){
        prev = currentImageIndex - 1 >= 0 ? props.imageURLs[currentImageIndex - 1] : props.imageURLs[props.imageURLs.length - 1];
        curr = props.imageURLs[currentImageIndex];
        next = currentImageIndex + 1 < props.imageURLs.length ? props.imageURLs[currentImageIndex + 1] : props.imageURLs[0];
    }

    const handleNext = () => {
        const index = currentImageIndex + 1 < props.imageURLs.length ? currentImageIndex + 1 : 0
        setCurrentImageIndex(index)
    }

    const handlePrev = () => {
        const index = currentImageIndex - 1 >= 0 ? currentImageIndex - 1 : props.imageURLs.length - 1
        setCurrentImageIndex(index)
    }

    const toggleSlideShow = () => {
        setLooping(!looping)
    }

    useEffect(() => {
        let loop = null
        if(looping) {
            loop = (setInterval(() => {
                handleNext();
                setCounter(counter => counter + 1)
            },props.interval))
        } else {
            clearInterval(loop)
        }
        return () => clearInterval(loop)
    }, [looping, counter])
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
                            onClick={handlePrev}
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
                            onClick={toggleSlideShow}
                        >{looping ? 'STOP SLIDESHOW' : 'START SLIDESHOW'}</Button>
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
                            onClick={handleNext}
                        >NEXT</Button>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    )
}
export default SlideShowFunctional
