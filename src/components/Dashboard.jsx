import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between'
        }}>
            <Link to='/login'>login</Link>
            <Link to='/admin'>admin</Link>
        </div>
    )
}

export default Dashboard