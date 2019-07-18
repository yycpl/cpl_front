import React from 'react';

const Category2 = ( props ) => {
  return (
    <div>
      <label>
        Category 2: <select name="category2" value={ props.category2 } onChange={ props.handleChange }>
          <option value="" disabled>Select</option>

          { props.category1 === 'programs' ||
            props.category1 === 'services' ||
            props.category1 === 'collections' ?
            <option value="childrens">Children</option> :
            ""
          }
          { props.category1 === 'programs' ||
            props.category1 === 'services' ||
            props.category1 === 'collections' ?
            <option value="teens">Teenagers</option> :
            ""
          }
          { props.category1 === 'programs' ||
            props.category1 === 'services' ||
            props.category1 === 'collections' ?
            <option value="adults">Adults</option> :
            ""
          }

          { props.category1 === 'services' ? <option value="families">Families</option> : "" }

          { props.category1 === 'programs' ? <option value="programs 2">Programs 2</option> : "" }

          { props.category1 === 'services' ? <option value="services 1">Services 1</option> : "" }
          { props.category1 === 'services' ? <option value="services 2">Services 2</option> : "" }

          { props.category1 === 'collections' ? <option value="collections 1">Collections 1</option> : "" }
          { props.category1 === 'collections' ? <option value="collections 2">Collections 2</option> : "" }

          { props.category1 === 'bookableItems' ? <option value="activityKits">Activity Kits</option> : "" }
          { props.category1 === 'bookableItems' ? <option value="youthKits">YAK Kits</option> : "" }
          { props.category1 === 'bookableItems' ? <option value="fingerPuppets">Finger Puppets</option> : "" }
          { props.category1 === 'bookableItems' ? <option value="flannelBoards">Flannel Boards</option> : "" }
          { props.category1 === 'bookableItems' ? <option value="playdates">Playdates</option> : "" }

          { props.category1 === 'facilities' ? <option value="facilities 1">Facilities 1</option> : "" }
          { props.category1 === 'facilities' ? <option value="facilities 2">Facilities 2</option> : "" }

          { props.category1 === 'patrons' ? <option value="patrons 1">Patrons 1</option> : "" }
          { props.category1 === 'patrons' ? <option value="patrons 2">Patrons 2</option> : "" }
        </select>
      </label>
    </div>
  )
}

export default Category2;
