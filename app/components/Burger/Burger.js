import React, { PureComponent } from 'react';
import styles from './Burger.scss';
import burger from './assets/menu.svg';

export default class Burger extends PureComponent {
  render() {
    return (
      <div className={styles.burger}>
        <img src={burger} alt="" />
      </div>
    );
  }
}
