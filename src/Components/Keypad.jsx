import React from "react";

const Keypad = ({ handleClick, handleClear, handleEqual }) => {
    const nums = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-"];
    const operations =  ["/", "*", "-", "+"];

    return (
        <div className="keypad">
            {/* Iterate over nums array and render buttons for each number */}
            {nums.map((num, index) => (
                <React.Fragment key={index}>
                    {/* Every 4th button has a className of operator-keys */}
                    <button className={`calc-keys ${((index + 1) % 4 === 0) ? "operator-keys" : ""}`}
                    onClick={() => handleClick(num)}>{num}</button>
                    
                    {/* Add line break after every 3 buttons */}
                    {((index + 1) % 4 === 0) && <br />}
                </React.Fragment>
            ))}
        </div>
    )
}

export default Keypad;