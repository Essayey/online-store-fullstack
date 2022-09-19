import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import star from '../assets/star.png'
import { fetchOneDevice } from '../http/deviceAPI'


const DevicePage = () => {
    const [device, setDevice] = useState({ info: [] })
    const { id } = useParams();

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])
    console.log(device.info)
    return (
        <Container className='mt-3'>

            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
                </Col>
                <Col md={4}>
                    <Row>
                        <h2>{device.name}</h2>
                        <div
                            className='d-flex align-items-center justify-content-between'
                            style={{ width: 50 }}
                        >
                            {device.rating}
                            <Image src={star} width={15} height={15} />
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{ width: 300, height: 300, }}
                    >
                        <h3>
                            {device.price} ₽
                        </h3>
                        <Button variant='outline-success'>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Col md={12} className='mt-3'>
                <h1>Характеристики</h1>
                {device.info.map(info =>
                    <Row key={info.id} style={Number(info.id) % 2 === 1 ? { background: '#00aa0033' } : {}}>
                        <Col
                            className='p-2'
                            md={3}
                            style={{ borderRight: '1px solid #00aa0033' }}>
                            {info.title}
                        </Col>
                        <Col
                            md={9}
                            className='p-2'
                        >
                            {info.description}
                        </Col>
                    </Row>
                )}
            </Col>
        </Container >
    )
}

export default DevicePage