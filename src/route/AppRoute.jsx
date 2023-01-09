import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { PATCH } from '../configs/RouteConfig'
import Home from '../page/Home'
import Notfound from '../page/Notfound'
import Register from '../page/Register'

export default function AppRoute() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path={PATCH.Home} element={<Home/>} />
            <Route path={PATCH.Register} element={<Register/>} />
            <Route path={PATCH[404]} element={<Notfound/>} />
        </Routes>
        </BrowserRouter>

    )
}