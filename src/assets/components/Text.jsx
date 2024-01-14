import React, { forwardRef } from "react";
import './Text.css';


const Text = forwardRef(( props, ref) => {

    return (
        <div className='text' ref = { ref }>{ props.text }</div>
    )
})

export default Text;