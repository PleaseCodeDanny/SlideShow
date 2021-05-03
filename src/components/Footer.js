import React, {useState} from "react";
import {Button, Container, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {addMarioToImageList} from "../actions/imageActions";



let Footer = (_) => {
    const [marioAdded, setMarioAdded] = useState(false);
    const dispatch = useDispatch()
    const onClickHandler = (e) => {
        e.preventDefault()
        dispatch(addMarioToImageList())
        setMarioAdded(true)
    }

    return (
        <footer>
            <Container>
                <Row>
                    <Button
                        type={'button'}
                        onClick={onClickHandler}
                    >
                        {marioAdded ? 'Hey, alright' :'Add Mario?'}
                    </Button>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
