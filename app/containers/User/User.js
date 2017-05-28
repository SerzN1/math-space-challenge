import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './User.scss';

export class User extends Component {
  static propTypes = {
    online: PropTypes.bool,
    name: PropTypes.string,
  };
  static defaultProps = {
    online: true,
    name: '',
  };
  render() {
    return (
      <div className={styles.user}>
        <img
          className={styles.avatar}
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/378995/avatar.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/378995/avatar@2x.png 2x"
          alt={this.props.name}
        />
        <span display-if={this.props.online} className={styles.online} />
      </div>
    );
  }
}

export default connect(
  () => ({})
)(User);
