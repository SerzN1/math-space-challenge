import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Burger } from '../../components';
import { User } from '../';
import styles from './Navbar.scss';
import { PAGES } from '../../constant';

export class NavBar extends Component {
  static propTypes = {
    pageId: PropTypes.string.isRequired
  };
  render() {
    const {title} = PAGES[this.props.pageId];
    return (
      <div className={styles.navbar}>
        <Burger />
        <div className={styles.title}>{title}</div>
        <User />
      </div>
    );
  }
}

export default connect(
  state => ({
    pageId: state.page.pageId
  })
)(NavBar);
