import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

const Title = (props) => {

      return (
          <div>
            <section>
                <div className="title">{props.title}</div>
            </section>
          </div>
      );
    }

    
  
  
  export default Title;
