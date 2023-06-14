import React from 'react';
import "./header.css"

const Header = ({darkMode}) => {

  const path = ['Home', 'Sub Page 2', 'Sub Page 3', 'Sub Page 4']
  return (
    <nav className='nav-panel'>
      <div className={!darkMode ? 'breadcrumb' : 'breadcrumb dark'}>
        {path.map((item, index) => (
          <>
            <a className={!darkMode ? 'page-link' : 'page-link dark'} key={index} href='#'>{item}</a>
            <span> {index !== path.length - 1 && ' > '} </span>
          </>
        ))}
      </div>
    </nav>
  );
};

export default Header;