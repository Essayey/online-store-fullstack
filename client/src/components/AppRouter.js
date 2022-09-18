import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Context } from '..';
import { authRoutes, publicRoutes } from '../routes';

const AppRouter = () => {
    const { user } = useContext(Context)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(route =>
                <Route key={route.path} path={route.path} element={<route.Component />} exact />
            )}
            {publicRoutes.map(route =>
                <Route key={route.path} path={route.path} element={<route.Component />} exact />
            )}
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
    )
}

export default AppRouter