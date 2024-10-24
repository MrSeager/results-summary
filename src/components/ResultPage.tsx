import React, { FC, useState, useEffect } from 'react';
//Components
import './resultPage.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image } from 'react-bootstrap';
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
        <Container fluid>
            <h1>{dataProps[1].icon}</h1>
            <Image src={dataProps[1].icon} />
        </Container>
    );
}

export default ResultPage;