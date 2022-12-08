import React from "react";

export default function Journal() {
    const response = async () => await fetch ("http://127.0.0.1:8000/journal/")
    console.log(response)

return (
    <div>
        <h1>Hello</h1>
    </div>
);
}