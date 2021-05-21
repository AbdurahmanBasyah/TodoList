import React from "react";
import './List.css';
import { BsTrash } from 'react-icons/bs';
import { CgUndo } from 'react-icons/cg';

const CompletedTask = (props) =>  {
    const items = props.items;
    const listItems = items.map( item =>
        {
        return (
            <div className="list-container">
                <div className="list-title">
                    <h4>{item.name}</h4>
                </div>
                <div className="icon-container">
                    <CgUndo size={32} className="mr-3 icon" onClick={() => props.undoItem(item.key)}/>
                    <BsTrash className= "icon" size={32} onClick={() => props.deleteItem(item.key)}/>
                </div>

                    
                </div>
            )
        }
    )

    return (
        <div>
            {listItems}
        </div>
    )
}

export default CompletedTask;