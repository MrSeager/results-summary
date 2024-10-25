import React, { FC } from 'react';
//Bootstrap
import { Container, Image } from 'react-bootstrap';
//Components
import AnimatedNumber from './AnimatedNumber.tsx';

interface ResultBarProps {
    nameType: string,
    imgLogo: string,
    category: string,
    score: number,
    dur: number,
    del: number
}

const ResultBar: FC<ResultBarProps> = ({ nameType, imgLogo, category, score, dur, del }) => {
    return (
        <Container fluid className={`d-flex p-3 rounded rounded-4 flex-row justify-content-between cs-bg-${nameType}`}>
            <span className='d-flex flex-row gap-3'>
                <Image fluid src={imgLogo} alt='icon' />
                <h3 className={`h4 cs-tc-${nameType} p-0 m-0`}>{category}</h3>
            </span>
            <h3 className='h4 p-0 m-0'><span className='cs-fw-700 cs-tc-dark-blue'><AnimatedNumber target={score} duration={dur} delay={del} /></span> / 100</h3>
        </Container>
    );
}

export default ResultBar;