import React, {useState} from "react";
import {Button, Container, Row} from "react-bootstrap";
import axios from "axios";




let Footer = (_) => {
    const [images, setImages] = useState([]);
    const onClickHandler = (e) => {
        e.preventDefault()
        const sendGetRequest =  async () => {
            return axios.get("/api/products/");

        }
        sendGetRequest()
            .then(({data}) => {
                setImages(data)
            })
    }

    return (
        <footer>
            <Container>
                <Row>
                    <Button
                        type={'button'}
                        onClick={onClickHandler}
                    >
                        {images ? 'Add images?' : 'Images added'}
                    </Button>
                    {images.length > 0 && images.map(image => <p key={`${image.name}-${image._id}`}>{JSON.stringify(image)}</p>)}
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
