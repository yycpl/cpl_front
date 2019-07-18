import React from 'react';

const Priority = ( props ) => {
  return (
    <div>
      <label>
        Priority:
        <select name="priority" value={props.priority} onChange={props.handleChange}>
          <option value="not">Not urgent and not very important</option>
          <option value="urgent">Urgent to someone but not that important</option>
          <option value="important">Not urgent but very important</option>
          <option value="urgent_important">Urgent and important</option>
        </select>
      </label>
    </div>
  )
}

export default Priority;
