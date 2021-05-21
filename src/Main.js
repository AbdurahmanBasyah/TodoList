import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
    render() {
      return (
        <div className='main'>
            <p>Organize your task better</p>
            <section className="new-task">
                <div className="title">New Task</div>
            </section>
            <form action="">
                <div className="form-group task-name">
                    <label for="name" >Task Name</label>
                    <input type="text" id="name" name="name" className="form-control" placeholder="New Activity"></input>
                </div>
                <div className="form-group task-date">
                    <label for="due-date">Due Date</label>
                    <input type="text" id="due-date" name="due-date" className="form-control" placeholder="02/12/21" onFocus="(this.type = 'date')" onBlur="(this.type='text')"></input>
                </div>
                <button type="submit">
                    <span className="add-icon">+</span>
                    <span className="add-text">Add Task</span>
                </button>
            </form>
            <hr></hr>
        </div>
      );
    }
  }
  
  export default Main;
