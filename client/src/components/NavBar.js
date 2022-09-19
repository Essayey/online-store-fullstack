import React, { useContext } from 'react'
import { Context } from '..'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token');
        navigate(LOGIN_ROUTE)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ color: 'white', textDecoration: 'none' }} to={SHOP_ROUTE}>Online Store</NavLink>
                {user.isAuth
                    ? <Nav className="ml-auto">
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Админ Панель
                        </Button>
                        <Button
                            className='ms-2'
                            variant={"outline-light"}
                            onClick={logOut}
                        >
                            Выйти
                        </Button>
                    </Nav>
                    : <Nav className="ml-auto">
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})

export default NavBar