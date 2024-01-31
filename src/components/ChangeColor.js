import React, { useState } from "react";


const ChangeColor = () => {
    const [color, setColor] = useState("Red");

    return(
        <>
            <h1>My favorite color is {color}</h1>
            <button type="button" onClick={() => setColor("Blue")}>
                Blue
            </button>

            <button type="button" onClick={() => setColor("Black")}>
                Black
            </button>

            <button type="button" onClick={() => setColor("Red")}>
                Red
            </button>

            <button type="button" onClick={() => setColor("Grey")}>
                Grey
            </button>
        </>
    );
}

export default ChangeColor;