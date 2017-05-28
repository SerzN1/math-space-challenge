import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Navbar, Tabs } from '../../containers';
import styles from './Layout.scss';

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.any,
  };
  render() {
    return (
      <div className={styles.layout}>
        <Navbar />
        <div className={styles.content}>
          {this.props.children}
        </div>
        <Tabs />
      </div>
    );
  }
}
