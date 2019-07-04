import React from 'react';

const Priority = ( props ) => {
  return (
    <div>
      <label>
        Priority: <select name="priority" value={ props.branch } onChange={ props.handleChange }>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
          <option value="critical">Critical</option>
        </select>
      </label>
    </div>
  )
}

export default Priority;
