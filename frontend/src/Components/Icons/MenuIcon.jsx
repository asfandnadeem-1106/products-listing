import React from "react";

const MenuIcon = ({ fillColor }) => {
    return (
        <svg width="14" height="15"
            fill={`${fillColor}`}
            fillRule="evenodd"
            xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                </path>
            </g>
        </svg>
    );
};

export default MenuIcon;

