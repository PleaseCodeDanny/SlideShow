import './App.css';
import {Container} from "reactstrap";
import React from "react";
import SlideShow from "./components/SlideShow";
import Footer from "./components/Footer";


function App() {
    return (
        <Container style={{maxWidth: '100%'}} className="App">
            <SlideShow interval={3000}>Slide Show</SlideShow>
            <Footer/>
        </Container>

    );
}

export default App;
