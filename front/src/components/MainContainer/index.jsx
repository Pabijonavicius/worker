import React from 'react';

const MainContainer = props => {
  const { navigation } = props;
  return (
    <div className='limiter'>
      {navigation}
      <div className='container-login100'>
        <div className='wrap-login100'>{props.children}</div>
      </div>
    </div>
  );
};

export default MainContainer;
