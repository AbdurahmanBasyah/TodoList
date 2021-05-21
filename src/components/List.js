import React from "react";
import './List.css';
import { BsTrash, BsCheckCircle } from 'react-icons/bs';


function ListItems(props)  {
    const items = props.items;

    const listItems = items.map( item =>
        {
            const d = new Date();
            
            const taskDate = new Date(item.date +"T23:59:00+07:00")
            const countdown = taskDate - d;
            const second = Math.floor(countdown/1000);
            const minute = Math.floor(second/60);
            const hour = Math.floor(minute/60);
            let message;
            if (hour < 0){
                message = "Deadline passed";
            } else if (hour < 24) {
                message = "Due today";
            } else if (hour < 48) {
                message = "Due tomorrow";
            } else {
                message = Math.floor(hour/24) + " days left";
            }
            return (
                <div className="list-container">
                    <div className="list-title">
                        <h4>{item.name}</h4>
                        <h5 style={hour < 24? {color:"red"}: hour < 48?{color:"orange"}:{color:"black"}}>{message}</h5>
                    </div>
                    <div className="icon-container">
                        <BsCheckCircle size={32} className="mr-3 icon" onClick={() => props.addToCompleted(item.key)}/>
                        <BsTrash size={32} className= "icon" onClick={() => props.deleteItem(item.key)}/>
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

export default ListItems;