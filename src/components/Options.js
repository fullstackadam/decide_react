import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <button
      className="button button--link"
      onClick={props.handleDeleteOptions}
    >
      Remove All
    </button>
    {props.options.length === 0 && <p>Please add an option to get started!</p>}
    <ol>
      {
        props.options.map(
          (option, index) => (
            <Option 
              option={option} 
              key={index.toString() + option.split(' ')[0]} 
              handleDeleteOption={props.handleDeleteOption}
            />
          )
        )
      }
    </ol>
  </div>
);

export default Options;