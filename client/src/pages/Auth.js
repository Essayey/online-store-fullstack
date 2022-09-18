import React from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

    console.log(isLogin);
    console.log(location)
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column' onSubmit={{}}>
                    <Form.Control
                        className='mt-2'
                        placeholder='Введите email'
                    />
                    <Form.Control
                        className='mt-2'
                        placeholder='Введите пароль'
                    />
                    <Row className='justify-content-between mt-3 ps-2 pe-2'>
                        {isLogin
                            ? <div
                                className='w-50'>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Регистрация</NavLink>
                            </div>
                            : <div
                                className='w-50'>
                                Уже зарегистрированы? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                            </div>}
                        <Button
                            className='w-50'
                            type='sumbit'
                            variant='outline-success'
                        >
                            {isLogin ? 'Войти' : 'Зарегистрироваться'}
                        </Button>
                    </Row>

                </Form>
            </Card>

        </Container>
    )
}

export default Auth