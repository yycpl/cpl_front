import React from 'react';

const Impact = ( props ) => {
  return (
    <div>
      <label>
        What is the impact?
        <select name="impact" value={props.impact} onChange={props.handleChange}>
          <option value="improve">Something we need to improve</option>
          <option value="more">Something we are doing well and should do more of</option>
          <option value="difficult">Something that can/does put us in a difficult spot</option>
          <option value="takeon">Something that we should consider taking on</option>
        </select>
      </label>
    </div>
  )
}

export default Impact;
