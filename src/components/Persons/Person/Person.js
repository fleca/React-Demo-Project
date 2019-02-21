// Stateless / Dumb / Presententional Component
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import withClass from '../../../hoc/withClass';
import styles from './Person.module.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  // has to be 'static' and 'contextType'!
  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log('[Person.js] authenticated: ' + this.context.authenticated);
  }

  render () {
    console.log('[Person.js] rendering...');

    return (
      <Fragment>
          {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
        <p key="i1" onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          //ref={(inputEl) => {this.inputElementRef = inputEl}}
          ref={this.inputElementRef}
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name} />
      </Fragment>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  chaned: PropTypes.func
};

export default withClass(Person, styles.Person);