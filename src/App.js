import './App.css';
import {Container} from "reactstrap";
import React from "react";
import SlideShow from "./components/SlideShow";
import Footer from "./components/Footer";
import SlideShowFunctional from "./components/SlideShowFunctional";
import {imageURLs} from "./static/images/imageURLs";


function App() {
    return (
        <Container style={{maxWidth: '100%'}} className="App">
            {/*<SlideShow interval={3000}>Slide Show</SlideShow>*/}
            <SlideShowFunctional imageURLs={imageURLs} interval={3000}/>
            <Footer/>
        </Container>

    );
}

export default App;
