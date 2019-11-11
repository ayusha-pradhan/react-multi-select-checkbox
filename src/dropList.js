import React from 'react'

export const dropList = props => {
    return (
        <li>
            <input key={props.id} value={props.value} /> {props.value}
            
        </li>
    )
}


export default dropList;