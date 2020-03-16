import React from 'react';
import './SideToggleButton.css';


export default function SideDrawerToggleButton(props) {
    return (
        <button onClick={props.togglenavbar} className="button-toggle">
            <div className="btn-toggle-line"></div>
            <div className="btn-toggle-line"></div>
            <div className="btn-toggle-line"></div>
        </button>
    )
}
