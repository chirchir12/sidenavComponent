import React from 'react'
import './sideDrawer.css'

export default function SideDrawer(props) {
    let toggleClass = 'sideDrawer';
    if(props.open) {
        toggleClass = 'sideDrawer openSideNav';

    }
    return (
        <nav className={toggleClass}>
            <ul>
            <li className="toolbar_item"><a href="">Home</a></li>
            <li className="toolbar_item"><a href="">about</a></li>
            <li className="toolbar_item"><a href="">contact</a></li>
            </ul>
        </nav>
    )
}
