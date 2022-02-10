import React from 'react';

const deleteevent= () => {
  return <>
  
      <h2>Are you sure to delete event?</h2>
      <label>
  <input type="radio" name="choice-radio"/>
  Yes
</label>
<label>
  <input type="radio" name="choice-radio"/>
  No
</label>

  </>;
}

export default deleteevent;