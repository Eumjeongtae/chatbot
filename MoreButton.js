// Buttons.js
import React from 'react';

const MoreButton = ({ buttons, actionProvider }) => {

    const handleClick = (action) => {
        actionProvider[action]();
    };

    return (
        <>
            {buttons.map((button, index) => (
                <span className='moreBtn' key={index} onClick={() => handleClick(button.action)}>
                    {button.text}
                </span>
            ))}
        </>
    );
};

export default MoreButton;
