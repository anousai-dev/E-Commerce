import React from "react"
import {Link} from "react-router-dom"


const Home = () => {
  return (
    <>
    <div className="text-3xl font-bold underline">
        Home
    </div>
    <Link to="/shop">Shop</Link>
    </>
  )
}
export default Home