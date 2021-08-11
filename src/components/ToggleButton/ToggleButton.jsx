import React from 'react';

const ToggleButton = () => {
  return (
    <div className="toggleWrapper">
      <input type="checkbox" className="dn" id="dn"/>
      <label for="dn" className="toggle">
        <span className="toggle__handler">
          <span className="crater crater--1"></span>
          <span className="crater crater--2"></span>
          <span className="crater crater--3"></span>
        </span>
        <span className="star star--1"></span>
        <span className="star star--2"></span>
        <span className="star star--3"></span>
        <span className="star star--4"></span>
        <span className="star star--5"></span>
        <span className="star star--6"></span>
      </label>
    </div>
    // <div className="toggle-switch">
    //   <input
    //     type="checkbox"
    //     className="toggle-switch-checkbox"
    //     name="dark-light-switch"
    //     id="dark-light-switch"
    //   />
    //   <label className="toggle-switch-label" htmlFor="dark-light-switch">
    //     <span className="toggle-switch-inner" />
    //     <span className="toggle-switch-switch" />
    //   </label>
    // </div>
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