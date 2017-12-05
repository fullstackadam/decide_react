import React from 'react';

const Option = (props) => (
  <div>
    {props.option}
    <button
      className="button button--link"
      onClick={(e) => {
        props.handleDeleteOption(props.option);
      }}
    >remove</button>
  </div>
);

export default Option;