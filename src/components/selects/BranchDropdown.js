import React from 'react';

const BranchDropdown = ( props ) => {
  return (
    <div>
      <label>
        Branch: <select name="branch" value={ props.branch } onChange={ props.handleChange }>
          <option value="central">Central</option>
          <option value="bowness">Bowness</option>
          <option value="countryHills">Country Hills</option>
          <option value="crowfoot">Crowfoot</option>
          <option value="fishCreek">Fish Creek</option>
          <option value="forestLawn">Forest Lawn</option>
          <option value="giuffreFamily">Giuffre Family</option>
          <option value="judithUmbach">Judith Umbach</option>
          <option value="louiseRiley">Louise Riley</option>
          <option value="memorialPark">Memorial Park</option>
          <option value="nichollsFamily">Nicholls Family</option>
          <option value="noseHill">Nose Hill</option>
          <option value="quarryPark">Quarry Park</option>
          <option value="rockyRidge">Rocky Ridge</option>
          <option value="saddletowne">Saddletowne</option>
          <option value="sageHill">Sage Hill</option>
          <option value="seton">Seton</option>
          <option value="shawnessy">Shawnessy</option>
          <option value="signalHill">Signal Hill</option>
          <option value="southwood">Southwood</option>
          <option value="villageSquare">Village Square</option>
          <option value="operationCenter">OS/Warehouse</option>
        </select>
      </label>
    </div>
  )
}

export default BranchDropdown;
