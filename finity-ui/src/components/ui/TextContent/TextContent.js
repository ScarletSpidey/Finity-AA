import React from 'react';
import './TextContent.css'
const TextContent = (props) => {
    return (
        <div>
            <h1 className="pb-4">
                {props.title}
            </h1>
            <img className="size p-4" src={props.img} alt="contentimage" />
            <p className="py-5">
                {props.paragraph}
            </p>
        </div>
    );
};

export default TextContent;