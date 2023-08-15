import { useEffect, useState } from 'react'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
const Banner = () => {
    const sampleCities = ['to Paris', 'to Atlanta', 'to Seattle', 'to Madrid', 'to Chicago', 'to Key West'];
    const [cityNumber, setCityNumber] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [curCityText, setCurCityText] = useState('');
    const defaultDelta = 100;
    const [delta, setDelta] = useState(defaultDelta); // interval for when ticker gets fired
    const [justCompleted, setJustCompleted] = useState(false)

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) }
    }, [curCityText])

    const tick = () => {
        if (isDeleting) {
            setDelta(defaultDelta / 1.75)
        } else {
            setDelta(defaultDelta);
        }

        setJustCompleted(true);
        let i = cityNumber % sampleCities.length;
        let fullText = sampleCities[i];
        let updatedText = (isDeleting) ? fullText.substring(0, curCityText.length - 1) : fullText.substring(0, curCityText.length + 1)

        if (isDeleting) {
            if (updatedText === '') {
                setIsDeleting(false);
                setCityNumber(cityNumber + 1);
            }
        } else if (updatedText === fullText) {
            setIsDeleting(true);
            setJustCompleted(true);
            setDelta(2500)
        }

        setCurCityText(updatedText);



    }

    return (
        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <h2>{'Plan 2 Go '}<span className='wrap'>{curCityText}<span className='cursor'>{justCompleted ? '|' : ''}</span></span> </h2>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner
