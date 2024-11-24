import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { Checkout } from "./pages/Checkout"
import { Success } from "./pages/Success"


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/success" element={<Success />} />
            </Route>
        </Routes>
    )
}