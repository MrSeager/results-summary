import React, { FC, useState, useEffect } from 'react';
//Components
import './resultPage.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image, Row, Col, Button } from 'react-bootstrap';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
//Axios
import axios from 'axios';

interface DataLinesProps {
    category: string,
    score: number,
    icon: string,
}

const ResultPage: FC = () => {
    const [dataProps, setDataProps] = useState<DataLinesProps[]>([]);

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/MrSeager/results-summary/refs/heads/main/src/data.json').then((response) => {
            setDataProps(response.data);
        });
    }, []);

    return (
        <Container fluid className='d-flex flex-column align-items-center justify-content-center min-vh-100'>
            <Container fluid className='shadow rounded-4 cs-w'>
                <Row>
                    <Col lg={6} xs={12} className='rounded-4 cs-bg-blue-gradient d-flex flex-column align-items-center gap-3'>
                        <h1>Your Result</h1>
                        <Container className='rounded-circle cs-bg-blue-gradient-2 w-75 d-flex flex-column align-items-center justify-content-center'>
                            <h2>76</h2>
                            <p>of 100</p>
                        </Container>
                        <h2>Great</h2>
                        <p>You scored higher than 65% of the people who have taken these tests.</p>
                    </Col>
                    <Col lg={6} xs={12}>
                        <h2>Summary</h2>
                        <Container className='d-flex flex-row justify-content-between'>
                            <h3><Image fluid src={dataProps[0].icon} alt='icon' />{dataProps[0].category}</h3>
                            <h3>{dataProps[0].score} / 100</h3>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default ResultPage;