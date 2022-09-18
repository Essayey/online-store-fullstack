import React, { useContext } from 'react'
import { Context } from '..'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/consts'
import { observer } from 'mobx-react-lite'

const NavBar = observer(() => {
    const { user } = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ color: 'white', textDecoration: 'none' }} to={SHOP_ROUTE}>Online Store</NavLink>
                {user.isAuth
                    ? <Nav className="ml-auto">
                        <Button variant={"outline-light"}>Админ Панель</Button>
                        <Button className='ms-2' variant={"outline-light"} onClick={() => user.setIsAuth(false)}>Выйти</Button>
                    </Nav>
                    : <Nav className="ml-auto">
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})

export default NavBar