import React, { useContext, useState } from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { login, registration } from '../http/userAPI'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'
import { Context } from '..'

const Auth = observer(() => {
    const navigate = useNavigate();
    const { user } = useContext(Context);
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async (e) => {
        e.preventDefault();
        try {
            let data;
            if (!isLogin) {
                data = await registration(email, password)
            }
            else {
                data = await login(email, password)
            }
            user.setUser(data);
            user.setIsAuth(true);
            navigate(SHOP_ROUTE);
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form onSubmit={e => click(e)} className='d-flex flex-column'>
                    <Form.Control
                        className='mt-2'
                        placeholder='Введите email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className='mt-2'
                        placeholder='Введите пароль'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
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
})

export default Auth