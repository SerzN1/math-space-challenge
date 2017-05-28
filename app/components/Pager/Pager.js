import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Pager.scss';

export default class Pager extends Component {
  static propTypes = {
    className: PropTypes.string,
    pages: PropTypes.number.isRequired,
    active: PropTypes.number.isRequired,
    completed: PropTypes.object,
    handleChange: PropTypes.func.isRequired,
  };
  static defaultProps = {
    className: '',
    completed: {}
  };
  constructor(props) {
    super(props);
    this.state = {
      scrollPosition: 0
    };
  }
  componentWillMount() {
    window.addEventListener('resize', this.checkPosition);
    this.checkPosition();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.active !== this.props.active) {
      this.checkPosition(null, nextProps.active);
    }
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.checkPosition);
  }
  checkPosition = (e, activeIndex) => {
    const index = activeIndex === undefined ? this.props.active : activeIndex;
    let scrollPosition = 0;
    if (this.list && this.wrapper) {
      const deltaWidth = this.list.scrollWidth - this.wrapper.offsetWidth;
      scrollPosition = (deltaWidth > 0) ? (- deltaWidth / (this.props.pages - 1) * index) : 0;
    }
    this.setState({scrollPosition});
  };
  handlePrev = () => {
    const prevItem = Math.max(this.props.active - 1, 0);
    this.props.handleChange(prevItem);
  };
  handleNext = () => {
    const nextItem = Math.min(this.props.active + 1, this.props.pages - 1);
    this.props.handleChange(nextItem);
  };
  renderPagerItem = (item, itemIndex) => {
    const className = `
      ${styles.page} 
      ${itemIndex === this.props.active ? styles.page__active : ''}
      ${this.props.completed[itemIndex] ? styles.page__completed : ''}
    `;
    return (
      <div
        className={className}
        key={itemIndex}
        onClick={() => this.props.handleChange(itemIndex)}
      >
        <div className={styles.number}>{itemIndex + 1}</div>
      </div>
    );
  };
  render() {
    const {pages, className} = this.props;
    return (
      <div className={`${styles.pager} ${className}`}>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/378995/left.svg"
          alt="Previous"
          className={styles.pagerPrev}
          onClick={this.handlePrev}
        />
        <div className={styles.pagerListWrapper} ref={node => {this.wrapper = node;}}>
          <div
            className={styles.pagerList}
            ref={node => {this.list = node;}}
            style={{transform: `translateX(${this.state.scrollPosition}px)`}}
          >
            {[...Array(pages)].map(this.renderPagerItem)}
          </div>
        </div>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/378995/right.svg"
          alt="Next"
          className={styles.pagerNext}
          onClick={this.handleNext}
        />
      </div>
    );
  }
}
