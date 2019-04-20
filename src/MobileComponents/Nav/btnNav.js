import React from 'react';
import '../../Styles/MainStyle.sass';

const btNav = (props) => {
    return (
        <button onClick={props.handleClick} className={props.active ? 'btn active' : 'btn'}>
            <span className='top bar'></span>
            <span className='mid bar'></span>
            <span className='bot bar'></span>
        </button>
     );
}

export default btNav;