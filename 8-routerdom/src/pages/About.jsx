import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function About() {
    return (
        <div>
            <h1>Hakkımızda</h1>
            <Link to="/about/company">Şirket</Link>
            <Link to="/about/employee">Çalışanlar</Link>

            <Outlet />
        </div>
    )
}

export default About