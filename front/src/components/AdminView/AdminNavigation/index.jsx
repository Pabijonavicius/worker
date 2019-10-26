import React from 'react';

const AdminNavigation = props => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      }}
      className='nav-menu'
    >
      <i
        style={{ fontSize: '3.5rem', color: 'dodgerblue' }}
        class='fa fa-home'
      ></i>
      <i
        style={{ fontSize: '3.5rem', color: 'dodgerblue' }}
        class='fa fa-home'
      ></i>
      <i
        style={{ fontSize: '3.5rem', color: 'dodgerblue' }}
        class='fa fa-home'
      ></i>
      <i
        style={{ fontSize: '3.5rem', color: 'dodgerblue' }}
        class='fa fa-home'
      ></i>
    </div>
  );
};

export default AdminNavigation;