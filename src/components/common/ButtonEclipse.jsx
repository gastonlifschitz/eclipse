import React from 'react';
import '../../styles/button-eclipse.css'

export default function ButtonEclipse({ children, handleClick }) {
    return (
        <div
            onClick={handleClick}
            alt="Eclipse Patagonia"
            className="button_style"
        >
            <p className="text-button-style">{children}</p>
        </div>
    );
}