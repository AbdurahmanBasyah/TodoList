import React from 'react';
import ReactDOM from 'react-dom';
import { FiBookmark } from 'react-icons/fi';

class Header extends React.Component {
    render() {
      return (
        <div className='header'>
          <div className="header-container">
            <p>Todo List <FiBookmark color="white"/></p>
          </div>
        </div>
      );
    }
  }
  
  export default Header;
