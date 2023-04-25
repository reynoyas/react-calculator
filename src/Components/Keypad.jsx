import React from "react";

const Keypad = ({ handleClick, handleClear, handleEqual }) => {
    const nums = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-"];

    return (
        <div className="keypad">
            {/* Iterate over nums array and render buttons for each number */}
            {nums.map((num, index) => (
                <React.Fragment key={index}>
                    {/* Every 4th button has a className of operator-keys */}
                    <button className={`calc-keys ${((index + 1) % 4 === 0) ? "operator-keys" : ""}`}
                    onClick={() => handleClick(num)}>{num}</button>
                    
                    {/* Add line break after every 4 buttons */}
                    {((index + 1) % 4 === 0) && <br />}
                </React.Fragment>
            ))}

            <button className='digit-keys bottom-left-corner' onClick={() => handleClick("0")}>0</button>
            <button className='fun-keys' onClick={handleEqual}>=</button>
            <button className='fun-keys' onClick={handleClear}>C</button>
            <button className='operator-keys bottom-right-corner' onClick={() => handleClick("+")}>+</button> 
        </div>
    )
}

export default Keypad;