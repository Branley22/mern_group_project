import React from 'react'
import Nav from '../Nav/Nav'
import {Router} from '@reach/router'
import Edit from '../Edit/Edit'
const Dashboard = ({children}) => {
    return (
        <div>
            <Nav/>

            {children}
            <Router>
            <Edit path="/edit/:id"/>
            </Router>
        </div>
    )
}

export default Dashboard
