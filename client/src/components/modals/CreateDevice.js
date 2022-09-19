import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Dropdown, Form, Modal, Row } from 'react-bootstrap'
import { Context } from '../..'
import { createDevice, fetchBrands, fetchTypes } from '../../http/deviceAPI'

const CreateDevice = observer(({ show, onHide }) => {
    const { device } = useContext(Context)
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }
    const removeInfo = (number) => {
        setInfo(info.filter((_, i) => i !== number));
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
        console.log(info);
    }

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));
    }, [])

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name);
        formData.append('price', `${price}`);
        formData.append('img', file);
        formData.append('brandId', device.selectedBrand.id);
        formData.append('typeId', device.selectedType.id);
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide());

    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className='pt-2'>
                        <Dropdown.Toggle>{device.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type =>
                                <Dropdown.Item
                                    key={type.id}
                                    onClick={() => device.setSelectedType(type)}>
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='pt-2'>
                        <Dropdown.Toggle>{device.selectedBrand.name || 'Выберите бренд'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand =>
                                <Dropdown.Item
                                    key={brand.id}
                                    onClick={() => device.setSelectedBrand(brand)}>
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className='mt-2'
                        placeholder='Введите название устройства'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <Form.Control
                        className='mt-2'
                        placeholder='Введите стоимость устройства'
                        type='number'
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                    />
                    <Form.Control
                        onChange={selectFile}
                        className='mt-2'
                        type='file'
                    />
                    <hr />
                    <Button
                        variant='outline-success'
                        onClick={addInfo}
                    >
                        Добавить свойство
                    </Button>
                    {
                        info.map((i, num) =>
                            <Row key={i.number} className='pt-2'>
                                <Col md={4}>
                                    <Form.Control
                                        onChange={e => changeInfo('title', e.target.value, i.number)}
                                        placeholder='Введите заголовок'
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        onChange={e => changeInfo('description', e.target.value, i.number)}
                                        placeholder='Введите описание'
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button
                                        variant='outline-danger'
                                        onClick={() => removeInfo(num)}
                                    >
                                        Удалить
                                    </Button>
                                </Col>
                            </Row>
                        )
                    }
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                <Button variant='outline-success' onClick={addDevice}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
})

export default CreateDevice