import React from 'react'

export function Check(props) {
    return (
        <li>
            <input 
            key={props.id} 
                onChange={props.handleCheckedAll && props.handleAllChecked} 
            type="checkbox" 
            checked={props.select} 
            value={props.value} /> {props.value}
            {/* <button onClick={props.delEvent}>Delete</button> */}
        </li>
    )
}


export default Check;