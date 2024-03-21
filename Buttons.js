// Buttons.js
import React from 'react';

const Buttons = ({ buttons, actionProvider }) => {

    const handleClick = (action) => {
        actionProvider[action]();
    };

    return (
        <div className="buttons">
            {buttons.map((button, index) => (
                <button key={index} onClick={() => handleClick(button.action)}>
                    {button.text}
                </button>
            ))}
        </div>
    );
};

export default Buttons;
