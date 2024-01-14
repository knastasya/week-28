import React, {useState, useEffect, useRef} from "react";

import './Form.css';
import Text from './Text.jsx';



export default function Form() {

    const ref = useRef();

    const [text, setText] = useState('');
    const [textArr, setTextArr] = useState([]);

    const onChange = (e) => {
        setText(e.target.value)
    }

    const addText = (e) => {
        setTextArr( prevState => [ text, ...prevState ]);
        setText('');
    }

    useEffect(() => {
        if( ref.current !== undefined ){
            ref.current.classList.add('new');
        }
    }, [ textArr ])

    return (
        <form className='form' action = "#" onSubmit = { e => e.preventDefault }>
        <textarea cols = '20' rows = '3' type="text"
        value={text}
        onChange={onChange}
        />
        <button type="submit" onClick={ addText }>Добавить</button>

        {textArr.map(( text, index ) => {
                if (textArr.length > 0) {
                    return <Text key = { index } text = { text } ref = { index === 0 ? ref : null }></Text>}
                else return null
            })}
        </form>
    )
}
