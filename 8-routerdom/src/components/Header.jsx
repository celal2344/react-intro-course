import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    return (
        <>
            <Link to="/">Anasayfa</Link>
            <Link to="/about">Hakkında</Link>
            <Link to="/products">Ürünlerimiz</Link>
            <Link to="/contact">İletişim</Link>
        </>
    )
}

export default Header