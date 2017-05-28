import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './Tabs.scss';
import { changeTab } from '../../actions';
import { TABS } from '../../constant';

export class Tabs extends Component {
  static propTypes = {
    activeTab: PropTypes.number.isRequired,
    changeTab: PropTypes.func.isRequired
  };
  renderTab = (tab, tabIndex) => {
    const className = `${styles.tab} ${this.props.activeTab === tabIndex ? styles.tab__active : ''}`;
    return (
      <div
        key={tabIndex}
        className={className}
        onClick={() => this.props.changeTab(tabIndex)}
      >
        <img src={tab.icon} alt={tab.name} />
      </div>
    );
  };
  render() {
    return (
      <div className={styles.tabs}>
        {TABS.map(this.renderTab)}
      </div>
    );
  }
}

export default connect(
  state => ({
    activeTab: state.tabs.activeTab
  }),
  {
    changeTab
  }
)(Tabs);
