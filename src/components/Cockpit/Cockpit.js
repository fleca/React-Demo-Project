import React, { useEffect, useRef, useContext } from 'react';

import styles from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log('[Cockpit.js] authenticated: ' + authContext.authenticated);

  // Runs after the render() cycle
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // const timer = setTimeout(() => {
    //   alert('Persons did change');
    // }, 1000)
    toggleBtnRef.current.click();
    return () => {
      // clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    }
  })

  let classes = [];
  let btnClass = '';

  if(props.showPersons) {
    btnClass = styles.Red;
  }

  if (props.personsLength <= 2) {
    classes.push(styles.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    classes.push(styles.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={styles.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(' ')}>This is really working!</p>
      <button
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}>Toggle Persons
      </button>
      <button onClick={authContext.login}>Log in</button>
    </div>
  );
}

export default React.memo(cockpit);
