import React from "react"
import { Outlet } from "react-router-dom"


const Layoutmain = () => {
    return (
        <>
            <h1>Main Layout</h1>
            <hr />
            <Outlet/>
        </>
    )
}
export default Layoutmain