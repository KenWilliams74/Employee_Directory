import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import '../App.css';


function Jumbo() {

    return (
        <>
            <Jumbotron className="JumboB" fluid>
                <Container>
                    <h1>Employee Directory</h1>
                    <p>
                        This is a directory of your employees that can be sorted or filtered.
                    </p>
                </Container>
            </Jumbotron>

        </>
    )
};

export default Jumbo;