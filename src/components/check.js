import React from 'react'

export const Check = props => {
    return (
        <li>
            <input 
            key={props.id} 
                onChange={props.handleCheckedElement} 
            type="checkbox" 
            checked={props.select} 
            value={props.value} /> {props.value}
            {/* <button onClick={props.delEvent}>Delete</button> */}
        </li>
    )
}


export default Check;