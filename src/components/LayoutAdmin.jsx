import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const LayoutAdmin = () => {
    return (
        <div>
            <div>
                <div>
                    <Link to="/admin/user">User</Link>
                </div>
                <div>
                    <Link to="/admin/product">product</Link>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default LayoutAdmin