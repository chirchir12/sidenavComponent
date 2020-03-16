import React from 'react'
import './Toolbar.css'
import SideDrawerToggleButton from '../SideDrawer/SideDrawerToggleButton'

export default function ToolBar(props) {
    return (
        <header className="toolbar">
            <nav className="toolbar_navigation">
                {/* ambarger */}
                <div className="toolbar_ambager">
                    <SideDrawerToggleButton togglenavbar={props.togglesidenav} />
                </div>
                {/* logo */}
                <div className="toolbar_logo">
                    <a href="#home">The Logo</a>
                </div>
                {/* link items */}
                <div className="spacer" />
                <div className="toolbar_nav_container">
                    <ul>
                        <li className="toolbar_item"><a href="">Home</a></li>
                        <li className="toolbar_item"><a href="">about</a></li>
                        <li className="toolbar_item"><a href="">contact</a></li>

                    </ul>
                </div>
            </nav>
        </header>
    )
}
