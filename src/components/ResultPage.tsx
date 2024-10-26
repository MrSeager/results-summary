import React, { FC, useState, useEffect } from 'react';
//Components
import './resultPage.css';
import ResultBar from './ResultBar.tsx';
import AnimatedNumber from './AnimatedNumber.tsx';
import AnimationText from './AnimationText.tsx';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
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

    const lineProps = {
        head_1: 'Your Result',
        head_2: 'Great',
        par_num: 'of 100',
        par_1: "You scored higher than 65% of the people who have taken these tests.",
        head_3: 'Summary'
    }

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/MrSeager/results-summary/refs/heads/main/src/data.json')
      .then((response) => {
        setDataProps(response.data);
      });
    }, []);

    AOS.init();

    return (
        <Container fluid className='d-flex flex-column align-items-center justify-content-center min-vh-100 px-0 py-3 overflow-hidden'>
            <Container fluid data-aos="fade-down" className='shadow rounded-4 cs-w cs-h'>
                <Row className='h-100'>
                    <Col data-aos="fade-right" data-aos-delay="300" lg={6} xs={12} className='rounded-4 cs-bg-blue-gradient d-flex flex-column align-items-center justify-content-between gap-3 text-white text-center p-4'>
                        <h1 className='h5 cs-tc-light-blue'><AnimationText text={lineProps.head_1} duration={100} delay={1000} /></h1>
                        <Container className='cs-ratio rounded-circle cs-bg-blue-gradient-2 w-75 d-flex flex-column align-items-center justify-content-center'>
                            <h2 className='display-1 cs-fw-800 p-0 m-0'><AnimatedNumber target={76} duration={1000} delay={1000} /></h2>
                            <p className='m-0 p-0 cs-tc-light-blue'><AnimationText text={lineProps.par_num} duration={100} delay={1000} /></p>
                        </Container>
                        <h2 className='cs-fw-700 m-0'><AnimationText text={lineProps.head_2} duration={100} delay={1500} /></h2>
                        <p className='cs-tc-light-blue'><AnimationText text={lineProps.par_1} duration={300} delay={2000} /></p>
                    </Col>
                    {dataProps.length > 0 ? (
                        <Col data-aos="fade-left" data-aos-delay="300" lg={6} xs={12} className='d-flex flex-column justify-content-around py-3 px-4 gap-3'>
                            <h2 className='cs-fw-700 cs-tc-dark-blue'>{lineProps.head_3}</h2>
                            <ResultBar
                                nameType='reaction'
                                imgLogo={dataProps[0].icon}
                                category={dataProps[0].category}
                                score={dataProps[0].score}
                                dur={1000}
                                del={1000}
                            />
                            <ResultBar
                                nameType='memory'
                                imgLogo={dataProps[1].icon}
                                category={dataProps[1].category}
                                score={dataProps[1].score}
                                dur={1000}
                                del={1500}
                            />
                            <ResultBar
                                nameType='verbal'
                                imgLogo={dataProps[2].icon}
                                category={dataProps[2].category}
                                score={dataProps[2].score}
                                dur={1000}
                                del={2000}
                            />
                            <ResultBar
                                nameType='visual'
                                imgLogo={dataProps[3].icon}
                                category={dataProps[3].category}
                                score={dataProps[3].score}
                                dur={1000}
                                del={2500}
                            />
                            <Button type='button' className='cs-btn border-0 py-3 rounded-pill w-100'>Continue</Button>
                        </Col>
                    ) : (
                        <p>Loading...</p> // Fallback content
                    )}
                </Row>
            </Container>
        </Container>
    );
}

export default ResultPage;