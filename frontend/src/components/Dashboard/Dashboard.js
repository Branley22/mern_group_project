import React from 'react'
import Nav from '../Nav/Nav'
const Dashboard = ({children}) => {
    return (
        <div>
            <Nav/>
            {children}
        </div>
    )
}

export default Dashboard
