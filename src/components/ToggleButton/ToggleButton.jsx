import React from 'react';

const ToggleButton = () => {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name="dark-light-switch"
        id="dark-light-switch"
      />
      <label className="toggle-switch-label" htmlFor="dark-light-switch">
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
};

export default ToggleButton;


// const ToggleButton = () => {
//   return (
//     <div className="toggle-button">
//       <p>dd</p>
//     </div>
//   );
// };