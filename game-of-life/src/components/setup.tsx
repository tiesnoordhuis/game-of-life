import React, { useState, ChangeEvent, MouseEvent } from 'react';

interface SetupComponent {
    setSize: Function
}

const SetupComponent = ({ setSize }: SetupComponent) => {
    const [inputValue, setInputValue] = useState(20);

    const onInputChange = (event: ChangeEvent<HTMLInputElement> ) => {
        const newValue: number = +event.target.value
        setInputValue(newValue);
    }

    const selectSize = (event: MouseEvent) => {
        setSize(inputValue);
    }


    return (
        <div>
            <span>
                How big a playing field do you want
            </span>
            <input type="number" value={inputValue} onChange={onInputChange} />
            <button onClick={selectSize}>start</button>
        </div>
    )
}

export default SetupComponent