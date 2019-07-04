import React from 'react';

const Category1 = ( props ) => {
  return (
    <div>
      <label>
        Category 1: <select name="category1" value={ props.branch } onChange={ props.handleChange }>
          <option value="programs">Programs</option>
          <option value="services">Services</option>
          <option value="collections">Collections</option>
          <option value="bookableItems">Bookable Items</option>
          <option value="facilities">Faciliites</option>
          <option value="patrons">Patrons</option>
        </select>
      </label>
    </div>
  )
}

export default Category1;
