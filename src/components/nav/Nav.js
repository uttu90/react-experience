import React from 'react';
import classNames from 'classnames';
import './Nav.css';

export function PrimaryNav(props) {
  return <Nav primary {...props} />
}

function Nav(props) {
  const navClassName = classNames(
    'nav',
    {
      'nav--vertical': props.vertical,
      'nav--primary': props.primary
    }
  );
  return (
    <nav className={navClassName}>
      {
        props.children
      }
    </nav>
  )
}

export default Nav;